import { UserType } from "../types/index.js";
import { UserInputType } from "../inputs/index.js";
import { UserController } from "../../controllers/index.js";

const updateUser = {
  type: UserType,
  description: "The mutation that allows you to update an existing User by Id",
  args: {
    user: {
      name: "user",
      type: UserInputType("update"),
    },
  },
  resolve: async (_, { user }, req) => {
    return UserController.updateUser(user, req);
  },
};

export {
  updateUser,
};
