import express, { json } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import compression from 'compression';
import session from 'express-session';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/index.js';
import { admin } from './controllers/admin.controller.js';
import adminRoutes from './routes/admin.routes.js';
import authenticationRoutes from './routes/authentication.routes.js';
import authMiddleware from './middleware/authentication.js';

const app = express();
config();

// Variables
const port = process.env.PORT;
const db = process.env.MONGODB;

// Database
connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    }
    console.log('Connected to DB');
    const adminjs = admin()
    app.use(adminjs.options.rootPath, adminRoutes(adminjs))
    adminjs.watch()
  }
);

// Setup
app.use(compression());
app.use(logger('dev'));
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);
app.use('/api', authenticationRoutes);

app.use('/graphql', authMiddleware, graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log('IndyBMS server listening on port', port);
});