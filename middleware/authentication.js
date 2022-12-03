import { verifyJWT } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  let tokenToVerify;

  if (req.header("Authorization")) {
    const parts = req.header("Authorization").split(" ");

    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        tokenToVerify = credentials;
      } else {
        return res
          .status(401)
          .json({ msg: "Format for Authorization: Bearer [token]" });
      }
    } else {
      return res
        .status(401)
        .json({ msg: "Format for Authorization: Bearer [token]" });
    }
  } else {
    return res.status(401).json({ msg: "No Authorization was found" });
  }

  return verifyJWT(tokenToVerify, (err, thisToken) => {
    if (err) return res.status(401).json({ err });
    req.token = thisToken;
    return next();
  });
};

const authMiddlewareGraphQL = (resolve, parent, args, req, info) => {
  let tokenToVerify;

  if (req.header("Authorization")) {
    const parts = req.header("Authorization").split(" ");

    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        tokenToVerify = credentials;
      } else {
        throw new Error("Format for Authorization: Bearer [token]");
      }
    } else {
      throw new Error("Format for Authorization: Bearer [token]");
    }
  } else {
    throw new Error("No Authorization was found");
  }

  return verifyJWT(tokenToVerify, (err, thisToken) => {
    if (err) throw new Error(err.message);
    req.token = thisToken;
    return resolve(parent, args, req, info);
  });
};

export { authMiddleware, authMiddlewareGraphQL };
