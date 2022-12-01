const { getUserQuery } = require("./user");
const { getAllCategoriesQuery, getCategoryQuery } = require("./category");
const { getAllEvents, event, searchEvents } = require("./event");

module.exports = {
  getUserQuery,
  getAllCategoriesQuery,
  getCategoryQuery,
  getAllEvents,
  event,
  searchEvents,
};
