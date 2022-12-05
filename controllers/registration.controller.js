import { Registration, User, Event } from "../models/index.js";
import { RegistrationValidation } from "../middleware/index.js";
import mailgun from "mailgun-js";
import moment from "moment";
import dotenv from "dotenv";
dotenv.config();

let Controller = {};

Controller.getAllEventRegistrations = async (event, req) => {
  try {
    let registrations = await Registration.find({ event: { $eq: event } }).populate(
      "user"
    );
    return registrations;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findRegistrationById = async (id, req) => {
  try {
    let foundRegistration = await Registration.findById(id)
      .populate("event")
      .populate("user");
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
    await User.findByIdAndUpdate(registration.user, {
      $push: { registeredEvents: createdRegistration },
    });
    const updatedEvent = await Event.findByIdAndUpdate(
      registration.event,
      {
        $push: { registrations: createdRegistration },
      },
      { returnDocument: "after" }
    );
    // sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    // const message = {
    //   to: registration.email,
    //   from: "indybms@ryandsilva.dev",
    //   templateId: "d-73921f02654846609ebf1c3fa10632f5",
    //   dynamicTemplateData: {
    //     eventName: updatedEvent.title,
    //     date: moment(updatedEvent.date).format("dddd, DD MMMM YYYY"),
    //   },
    // };
    // const res = await sendgrid.send(message);
    const DOMAIN = "sandboxc7344ef1372548b78a909471f8fa41f3.mailgun.org";
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
    const data = {
      from: "IndyBMS Events <mailgun@sandboxc7344ef1372548b78a909471f8fa41f3.mailgun.org>",
      to: registration.email,
      subject: "Registration Complete",
      html: `<h1>Sucessful Registration</h1><p>You have successfully registered for ${
        updatedEvent.title
      } scheduled for ${moment(updatedEvent.date).format("dddd, DD MMMM YYYY")}</p>`,
    };
    mg.messages().send(data, function (error, body) {});
    return createdRegistration;
  } catch (err) {
    throw Error(err);
  }
};

export default Controller;
