import { Event } from "../models/index.js";
import { EventValidation } from "../middleware/index.js";

let Controller = {};

Controller.createEvent = async (event, req) => {
  const { error } = EventValidation.createEvent(event);
  if (error) {
    throw Error(error);
  }
  if (req.token.privilege === "USER") {
    throw Error("Not authorized to create event.");
  }
  try {
    let createdEvent = await Event.create({
      title: event.title,
      description: event.description,
      category: event.category,
      maxAllowedRegistrations: event.maxAllowedRegistrations,
      coverImage: event.coverImage,
      status: event.status,
      gallery: event.gallery,
      location: event.location,
      date: event.date,
      ageRestriction: event.ageRestriction,
      registrationFee: event.registrationFee,
      owner: req.token.id,
    });
    return createdEvent;
  } catch (err) {
    throw Error(err);
  }
};

Controller.updateEvent = async (event, req) => {
  const { error } = EventValidation.updateEvent(event);
  if (error) {
    throw Error(error);
  }
  try {
    let updatedEvent = await Event.findByIdAndUpdate(
      event.id,
      {
        title: event.title,
        description: event.description,
        maxAllowedRegistrations: event.maxAllowedRegistrations,
        coverImage: event.coverImage,
        status: event.status,
        gallery: event.gallery,
        location: event.location,
        date: event.date,
        ageRestriction: event.ageRestriction,
        registrationFee: event.registrationFee,
      },
      { returnDocument: "after" }
    );
    if (event.category) {
      updatedEvent.category = event.category;
      await updatedEvent.save();
    }
    return updatedEvent;
  } catch (err) {
    throw Error(err);
  }
};

Controller.getAllEvents = async (req) => {
  try {
    let foundEvents = await Event.find({}).populate("owner").populate("category");
    return foundEvents;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findEventById = async (id, req) => {
  try {
    let foundEvent = await Event.findById(id).populate("owner").populate("category");
    return foundEvent;
  } catch (err) {
    throw Error(err);
  }
};

Controller.searchEvents = async (searchTerm, req) => {
  try {
    let foundEvents = await Event.find({
      title: { $regex: searchTerm, $options: "i" },
    })
      .populate("owner")
      .populate("category");
    return foundEvents;
  } catch (err) {
    throw Error(err);
  }
};

export default Controller;
