const { CategoryType } = require('../types');
const { CategoryInputType } = require('../inputs');
const { CategoryController } = require('../../controllers');

const createCategory = {
  type: CategoryType,
  description: 'The mutation that allows you to create a new category',
  args: {
    category: {
      name: 'category',
      type: CategoryInputType,
    },
  },
  resolve: async (_, { category }, req) => {
    return CategoryController.createCategory(category, req);
  },
};

module.exports = {
  createCategory,
}