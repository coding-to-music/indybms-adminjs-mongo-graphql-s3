const { GraphQLString } = require("graphql");

const { EventType } = require("../types");
const { EventController } = require("../../controllers");

const getAllEvents = {
  type: [EventType],
  resolve: (_, __, req) => {
    return EventController.getAllEvents(req);
  },
};

const event = {
  type: EventType,
  args: {
    id: {
      name: "id",
      type: GraphQLString,
    },
  },
  resolve: (_, { id }, req) => {
    return EventController.getEventById(id, req);
  },
};

const searchEvents = {
  type: [EventType],
  args: {
    searchTerm: {
      name: "searchTerm",
      type: GraphQLString,
    },
  },
  resolve: (_, { searchTerm }, req) => {
    return EventController.searchEvents(searchTerm, req);
  },
};

module.exports = { getAllEvents, event, searchEvents };
