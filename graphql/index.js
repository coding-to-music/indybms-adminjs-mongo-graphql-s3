import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { applyMiddleware } from 'graphql-middleware';
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
import { authMiddlewareGraphQL } from '../middleware/authentication.js'

const middlewares = {
  rootQuery: {
    user: authMiddlewareGraphQL,
    eventRegistrations: authMiddlewareGraphQL,
    registration: authMiddlewareGraphQL,
  },
  rootMutation: {
    updateUser: authMiddlewareGraphQL,
    createCategory: authMiddlewareGraphQL,
    createEvent: authMiddlewareGraphQL,
    updateEvent: authMiddlewareGraphQL,
  },
};

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
    categoryEvents: categoryEvents,
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

const schemaWithMiddleware = applyMiddleware(
  schema,
  middlewares,
)

export default schemaWithMiddleware;
