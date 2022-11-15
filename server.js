const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session')
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./graphql');

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')

const app = express();
dotenv.config();

// Variables
const port = process.env.PORT;
const db = process.env.MONGODB;

// Setup
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    }
    console.log('Connected to DB');
  }
);

// ADMIN
const admin = new AdminJS({})

const DEFAULT_ADMIN = {
  email: 'admin@indybms.com',
  password: '1234567890',
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
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

app.use(admin.options.rootPath, adminRouter)

app.listen(port, () => {
  console.log('IndyBMS server listening on port', port);
});