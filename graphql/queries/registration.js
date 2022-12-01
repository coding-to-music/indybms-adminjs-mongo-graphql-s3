import { GraphQLList, GraphQLString } from "graphql";

import { RegistrationType } from "../types/index.js";
import { RegistrationController } from "../../controllers/index.js";

const getAllEventRegistrationsQuery = {
  type: new GraphQLList(RegistrationType),
  args: {
    event: {
      name: "event",
      type: GraphQLString,
    },
  },
  resolve: (_, { event }, req) => {
    return RegistrationController.getAllEventRegistrations(event, req);
  },
};

const getRegistrationQuery = {
  type: RegistrationType,
  args: {
    id: {
      name: "id",
      type: GraphQLString,
    },
  },
  resolve: (_, { id }, req) => {
    return RegistrationController.findRegistrationById(id, req);
  },
};

export { getAllEventRegistrationsQuery, getRegistrationQuery };
