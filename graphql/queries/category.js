import { GraphQLList, GraphQLString } from "graphql";

import { CategoryType } from "../types/index.js";
import { CategoryController } from "../../controllers/index.js";

const getAllCategoriesQuery = {
  type: new GraphQLList(CategoryType),
  resolve: (_, __, req) => {
    return CategoryController.getAllCategories(req);
  },
};

const getCategoryQuery = {
  type: CategoryType,
  args: {
    id: {
      name: "id",
      type: GraphQLString,
    },
    name: {
      name: "name",
      type: GraphQLString,
    },
  },
  resolve: (_, { id, name }, req) => {
    if (id) {
      return CategoryController.findCategoryById(id, req);
    } else {
      return CategoryController.findCategoryByName(name, req);
    }
  },
};

export { getAllCategoriesQuery, getCategoryQuery };
