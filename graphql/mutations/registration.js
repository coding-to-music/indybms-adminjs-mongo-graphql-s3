import { RegistrationType } from "../types/index.js";
import { RegistrationInputType } from "../inputs/index.js";
import { RegistrationController } from "../../controllers/index.js";

const createRegistration = {
  type: RegistrationType,
  description: "The mutation that allows you to create a new event registration",
  args: {
    registration: {
      name: "registration",
      type: RegistrationInputType,
    },
  },
  resolve: async (_, { registration }, req) => {
    return RegistrationController.register(registration, req);
  },
};

export {
  createRegistration,
};
