import AdminJS from "adminjs";
import AdminJSMongoose from "@adminjs/mongoose";
import mongoose from "mongoose";
import { User, Category, Event, Registration } from "../models/index.js";

AdminJS.registerAdapter(AdminJSMongoose);

const admin = () =>
  new AdminJS({
    databases: [mongoose],
    rootPath: "/admin",
    branding: {
      companyName: "IndyBMS",
      softwareBrothers: false,
      logo: false,
    },
    resources: [
      {
        resource: User,
        options: {
          listProperties: ["_id", "name", "email", "phone", "privilege", "registeredEvents", "createdEvents", "createdAt", "updatedAt"],
          filterProperties: ["_id", "name", "email", "phone", "privilege", "registeredEvents", "createdEvents", "createdAt", "updatedAt"],
          editProperties: ["name", "email", "phone", "privilege", "registeredEvents", "createdEvents"],
          showProperties: ["_id", "name", "email", "phone", "privilege", "registeredEvents", "createdEvents", "createdAt", "updatedAt"],
        },
      },
      {
        resource: Category,
        options: {
          listProperties: ["_id", "name", "image", "createdAt", "updatedAt"],
          filterProperties: ["_id", "name", "image", "createdAt", "updatedAt"],
          editProperties: ["name", "image"],
          showProperties: ["_id", "name", "image", "createdAt", "updatedAt"],
        },
      },
      {
        resource: Event,
        options: {
          listProperties: ["_id", "title", "description", "category", "registrations", "maxAllowedRegistrations", "coverImage", "gallery", "location", "date", "ageRestriction", "status", "registrationFee", "owner", "createdAt", "updatedAt"],
          filterProperties: ["_id", "title", "description", "category", "registrations", "maxAllowedRegistrations", "coverImage", "gallery", "location", "date", "ageRestriction", "status", "registrationFee", "owner", "createdAt", "updatedAt"],
          editProperties: ["title", "description", "category", "registrations", "maxAllowedRegistrations", "coverImage", "gallery", "location", "date", "ageRestriction", "status", "registrationFee", "owner"],
          showProperties: ["_id", "title", "description", "category", "registrations", "maxAllowedRegistrations", "coverImage", "gallery", "location", "date", "ageRestriction", "status", "registrationFee", "owner", "createdAt", "updatedAt"],
        },
      },
      {
        resource: Registration,
        options: {
          listProperties: ["_id", "name", "email", "phone", "user", "event", "createdAt", "updatedAt"],
          filterProperties: ["_id", "name", "email", "phone", "user", "event", "createdAt", "updatedAt"],
          editProperties: ["name", "email", "phone", "user", "event"],
          showProperties: ["_id", "name", "email", "phone", "user", "event", "createdAt", "updatedAt"],
        },
      },
    ],
  });

const DEFAULT_ADMIN = {
  email: "admin@indybms.com",
  password: "1234567890",
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

export { admin, authenticate };
