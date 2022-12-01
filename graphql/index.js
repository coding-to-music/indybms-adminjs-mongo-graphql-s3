import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {
  getUserQuery,
  getAllCategoriesQuery,
  getCategoryQuery,
  event,
  getAllEvents,
  searchEvents,
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
    user: getUserQuery,
    allCategories: getAllCategoriesQuery,
    category: getCategoryQuery,
    event: event,
    allEvents: getAllEvents,
    searchEvents: searchEvents,
    eventRegistrations: getAllEventRegistrationsQuery,
    registration: getRegistrationQuery,
  }),
});

const RootMutation = new GraphQLObjectType({
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

export default schema;
