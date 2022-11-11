const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const compression = require('compression');

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

// mongoose.connect(
//   db,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Connected to DB');
//   }
// );

app.listen(port, () => {
  console.log('Meeting Minutes server listening on port', port);
});