import { GraphQLString, GraphQLObjectType } from "graphql";
import { EventType } from "./event.js";

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (user) => user.id,
    },
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    phone: {
      type: GraphQLString,
      resolve: (user) => user.phone,
    },
    privilege: {
      type: GraphQLString,
      resolve: (user) => user.privilege,
    },
    // createdEvents: {
    //   type: [EventType],
    //   resolve: (user) => user.createdEvents,
    // },
    // registeredEvents: {
    //   type: [EventType],
    //   resolve: (user) => user.createdEvents,
    // },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updatedAt,
    },
  }),
});

export { UserType };
