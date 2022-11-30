const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const secret = process.env.JWT_SECRET ?? 'jwt_secret';

const verifyJWT = (token, callback) => {
  return jwt.verify(token, secret, {}, callback);
}

const issueJWT = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: 21600 });
}

module.exports = {
  verifyJWT,
  issueJWT,
}