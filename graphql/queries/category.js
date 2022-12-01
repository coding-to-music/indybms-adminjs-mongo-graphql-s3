const {
  GraphQLString,
} = require('graphql');

const { CategoryType } = require('../types');
const { CategoryController } = require('../../controllers/index');

const getAllCategoriesQuery = {
  type: CategoryType,
  resolve: (_, __, req) => {
      return CategoryController.getAllCategories(req);
  },
};

const getCategoryQuery = {
  type: CategoryType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString,
    },
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
  resolve: (_, { id, name }, req) => {
    if (id) {
      return CategoryController.findCategoryById(id, req);
    } else {
      return CategoryController.findCategoryByName(name, req)
    }
  },
};

module.exports = { getAllCategoriesQuery, getCategoryQuery };