import { Registration } from "../models/index.js";
import { RegistrationValidation } from "../middleware/index.js";

let Controller = {};

Controller.getAllEventRegistrations = async (event, req) => {
  try {
    let registrations = await Registration.find({ event: { $eq: event }});
    return registrations;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findRegistrationById = async (id, req) => {
  try {
    let foundRegistration = await Registration.findById(id).populate("event").populate('user');
    return foundRegistration;
  } catch (err) {
    throw Error(err);
  }
};

Controller.register = async (registration, req) => {
  const { error } = RegistrationValidation.register(registration);
  if (error) {
    throw Error(error);
  }
  try {
    let createdRegistration = await Registration.create({
      name: registration.name,
      email: registration.email,
      phone: registration.phone,
      user: registration.user,
      event: registration.event,
    });
    return createdRegistration;
  } catch (err) {
    throw Error(err);
  }
};

export default Controller;