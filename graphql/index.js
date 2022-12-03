import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {
  getUserQuery,
  getAllCategoriesQuery,
  getCategoryQuery,
  event,
  getAllEvents,
  searchEvents,
  categoryEvents,
  getAllEventRegistrationsQuery,
  getRegistrationQuery,
} from "./queries/index.js";
import { 
  updateUser, 
  createCategory, 
  createEvent, 
  updateEvent, 
  createRegistration,
} from "./mutations/index.js";

const RootQuery = new GraphQLObjectType({
  name: "rootQuery",
  description:
    "This is the root query which holds all possible READ entrypoints for the GraphQL API",
  fields: () => ({
    allCategories: getAllCategoriesQuery,
    category: getCategoryQuery,
    event: event,
    allEvents: getAllEvents,
    searchEvents: searchEvents,
    categoryEvents: categoryEvents,
  }),
});

const RootMutation = new GraphQLObjectType({
  name: "rootMutation",
  description:
    "This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API",
  fields: () => ({
    registerForEvent: createRegistration,
  }),
});

const SecureRootQuery = new GraphQLObjectType({
  name: "rootQuery",
  description:
    "This is the root query which holds all possible READ entrypoints for the GraphQL API",
  fields: () => ({
    user: getUserQuery,
    allCategories: getAllCategoriesQuery,
    category: getCategoryQuery,
    event: event,
    allEvents: getAllEvents,
    searchEvents: searchEvents,
    categoryEvents: categoryEvents,
    eventRegistrations: getAllEventRegistrationsQuery,
    registration: getRegistrationQuery,
  }),
});

const SecureRootMutation = new GraphQLObjectType({
  name: "rootMutation",
  description:
    "This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API",
  fields: () => ({
    updateUser: updateUser,
    createCategory: createCategory,
    createEvent: createEvent,
    updateEvent: updateEvent,
    registerForEvent: createRegistration,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

const secureSchema = new GraphQLSchema({
  query: SecureRootQuery,
  mutation: SecureRootMutation,
});

export { secureSchema, schema };
