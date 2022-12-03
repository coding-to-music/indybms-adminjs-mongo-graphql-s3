import { GraphQLList, GraphQLString } from "graphql";
import { EventType } from "../types/index.js";
import { EventController } from "../../controllers/index.js";

const getAllEvents = {
  type: new GraphQLList(EventType),
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
    return EventController.findEventById(id, req);
  },
};

const searchEvents = {
  type: new GraphQLList(EventType),
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

const categoryEvents = {
  type: new GraphQLList(EventType),
  args: {
    categoryId: {
      name: "categoryId",
      type: GraphQLString,
    },
  },
  resolve: (_, { categoryId }, req) => {
    return EventController.findEventByCategory(categoryId, req);
  },
};

export { getAllEvents, event, searchEvents, categoryEvents };
