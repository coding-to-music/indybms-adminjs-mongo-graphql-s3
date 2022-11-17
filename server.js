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
const { admin } = require('./controllers/admin.controller');
const adminRoutes = require('./routes/admin.routes');

const app = express();
dotenv.config();

// Variables
const port = process.env.PORT;
const db = process.env.MONGODB;

// Database
mongoose.connect(
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
app.use(express.json());
app.use(cors());
// app.use(helmet());
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

app.listen(port, () => {
  console.log('IndyBMS server listening on port', port);
});