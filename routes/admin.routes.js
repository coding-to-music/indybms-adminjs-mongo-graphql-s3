import AdminJSExpress from "@adminjs/express";
import { config } from "dotenv";
config();

import { authenticate } from "../controllers/admin.controller.js";

const adminRouter = (admin) =>
AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: process.env.COOKIE_SECRET,
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  );

export default adminRouter;
