import { GraphQLInputObjectType, GraphQLString } from "graphql";

const RegistrationInputType = new GraphQLInputObjectType({
  name: "RegistrationInputType",
  description: "This represents a RegistrationInputType",
  fields: {
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLString,
    },
    event: {
      type: GraphQLString,
    },
  },
});

export default RegistrationInputType;
