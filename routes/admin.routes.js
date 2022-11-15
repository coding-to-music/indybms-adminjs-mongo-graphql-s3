const AdminJSExpress = require('@adminjs/express')
const dotenv = require('dotenv');
dotenv.config()

const { authenticate } = require('../controllers/admin.controller')

const adminRouter = (admin) => AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: process.env.COOKIE_SECRET,
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
    },
    name: 'adminjs',
  }
)

module.exports = adminRouter;