import { GraphQLInputObjectType, GraphQLString } from "graphql";

const CategoryInputType = new GraphQLInputObjectType({
  name: "CategoryInputType",
  description: "This represents a CategoryInputType",
  fields: {
    name: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
  },
});

export default CategoryInputType;
