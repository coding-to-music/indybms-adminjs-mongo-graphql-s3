import { EventType } from "../types/index.js";
import { EventInputType } from "../inputs/index.js";
import { EventController } from "../../controllers/index.js";

const createEvent = {
  type: EventType,
  description: "The mutation that allows you to create a new event",
  args: {
    event: {
      name: "event",
      type: EventInputType("create"),
    },
  },
  resolve: async (_, { event }, req) => {
    return EventController.createEvent(event, req);
  },
};

const updateEvent = {
  type: EventType,
  description: "The mutation that allows you to update an existing event by Id",
  args: {
    event: {
      name: "event",
      type: EventInputType("update"),
    },
  },
  resolve: async (_, { event }, req) => {
    return EventController.updateEvent(event, req);
  },
};

export {
  createEvent,
  updateEvent,
};
