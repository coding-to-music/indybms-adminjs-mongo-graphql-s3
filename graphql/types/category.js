import { GraphQLString, GraphQLObjectType } from "graphql";

const CategoryType = new GraphQLObjectType({
  name: "Category",
  description: "This represents a Category",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (category) => category.name,
    },
  }),
});

export { CategoryType };
