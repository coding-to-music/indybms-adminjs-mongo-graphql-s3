import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const secret = process.env.JWT_SECRET ?? "jwt_secret";

const verifyJWT = (token, callback) => {
  return jwt.verify(token, secret, {}, callback);
};

const issueJWT = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: 21600 });
};

export {
  verifyJWT,
  issueJWT,
};
