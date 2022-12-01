const { EventType } = require('../types');
const { EventInputType } = require('../inputs');
const { EventController } = require('../../controllers');

const createEvent = {
  type: EventType,
  description: 'The mutation that allows you to create a new event',
  args: {
    event: {
      name: 'event',
      type: EventInputType('create'),
    },
  },
  resolve: async (_, { event }) => {
    return EventController.createEvent(event);
  },
};

const updateEvent = {
  type: EventType,
  description: 'The mutation that allows you to update an existing event by Id',
  args: {
    event: {
      name: 'event',
      type: EventInputType('update'),
    },
  },
  resolve: async (_, { event }) => {
    return EventController.updateEvent(event);
  },
};

module.exports = {
  createEvent,
  updateEvent,
}