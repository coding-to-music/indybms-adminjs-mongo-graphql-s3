import { GraphQLString, GraphQLObjectType } from "graphql";

const CategoryType = new GraphQLObjectType({
  name: "Category",
  description: "This represents a Category",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (category) => category.id,
    },
    name: {
      type: GraphQLString,
      resolve: (category) => category.name,
    },
    image: {
      type: GraphQLString,
      resolve: (category) => category.image,
    },
  }),
});

export { CategoryType };
