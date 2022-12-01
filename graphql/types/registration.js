import { GraphQLString, GraphQLObjectType, GraphQLList } from "graphql";
import { EventType, UserType } from "./index.js";

const RegistrationType = new GraphQLObjectType({
  name: "Registration",
  description: "This represents a Event Registration",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (registration) => registration.id,
    },
    name: {
      type: GraphQLString,
      resolve: (registration) => registration.name,
    },
    email: {
      type: GraphQLString,
      resolve: (registration) => registration.email,
    },
    phone: {
      type: GraphQLString,
      resolve: (registration) => registration.phone,
    },
    user: {
      type: UserType,
      resolve: (registration) => registration.user,
    },
    event: {
      type: EventType,
      resolve: (registration) => registration.event,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (registration) => registration.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (registration) => registration.updatedAt,
    },
  }),
});

export { RegistrationType };
