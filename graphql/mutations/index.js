const { updateUser } = require('./user');
const { createCategory } = require('./category');
const { createEvent, updateEvent } = require('./event');

module.exports = {
  createCategory,
  updateUser,
  createEvent,
  updateEvent,
};