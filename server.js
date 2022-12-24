import express, { json } from "express";

import { S3Client } from "@aws-sdk/client-s3";
import { admin } from "./controllers/admin.controller.js";
import adminRoutes from "./routes/admin.routes.js";
import { authMiddleware } from "./middleware/authentication.js";
import authenticationRoutes from "./routes/authentication.routes.js";
import compression from "compression";
import { config } from "dotenv";
import { connect } from "mongoose";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import logger from "morgan";
import multer from "multer";
import multerS3 from "multer-s3";
import schema from "./graphql/index.js";
import session from "express-session";

const app = express();
config();

// Variables
const port = process.env.PORT;
const db = process.env.MONGO_URI;

// Database
connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to DB");
  const adminjs = admin();
  app.use(adminjs.options.rootPath, adminRoutes(adminjs));
  adminjs.watch();
});

// Setup
app.use(compression());
app.use(logger("dev"));
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/api", authenticationRoutes);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// Image Upload
const s3 = new S3Client({
  region: process.env.APP_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.APP_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.APP_AWS_S3_SECRET_ACCESS_KEY,
  },
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: process.env.APP_AWS_S3_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const name = Date.now().toString() + "-" + file.originalname;
      cb(null, name);
    },
  }),
});

app.post(
  "/api/upload/single",
  authMiddleware,
  upload.single("coverImage"),
  function (req, res, next) {
    return res.status(200).json({ status: true, url: req.file.location });
  }
);

app.post(
  "/api/upload/multiple",
  authMiddleware,
  upload.array("gallery", 8),
  function (req, res, next) {
    let urls = [];
    req.files.forEach((f) => {
      urls.push(f.location);
    });
    return res.status(200).json({
      status: true,
      count: req.files.length,
      urls: urls,
    });
  }
);

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "up" });
});

app.listen(port, () => {
  console.log("IndyBMS server listening on port", port);
});
