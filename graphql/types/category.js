import { GraphQLString, GraphQLObjectType } from "graphql";
// import { EventType } from "./event.js";

const CategoryType = new GraphQLObjectType({
  name: "Category",
  description: "This represents a Category",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (category) => category.name,
    },
    // events: {
    //   type: [EventType],
    //   resolve: (category) => category.events,
    // },
  }),
});

export { CategoryType };
