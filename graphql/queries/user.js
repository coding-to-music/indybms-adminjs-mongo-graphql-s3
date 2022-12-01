import { GraphQLString } from "graphql";
import { UserType } from "../types/index.js";
import { UserController } from "../../controllers/index.js";

const getUserQuery = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLString,
    },
    email: {
      name: "email",
      type: GraphQLString,
    },
  },
  resolve: (_, { id, email }, req) => {
    if (id) {
      return UserController.findUserById(id, req);
    } else {
      return UserController.findUserByEmail(email, req);
    }
  },
};

export { getUserQuery };
