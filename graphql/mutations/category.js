import { CategoryType } from "../types/index.js";
import { CategoryInputType } from "../inputs/index.js";
import { CategoryController } from "../../controllers/index.js";

const createCategory = {
  type: CategoryType,
  description: "The mutation that allows you to create a new category",
  args: {
    category: {
      name: "category",
      type: CategoryInputType,
    },
  },
  resolve: async (_, { category }, req) => {
    return CategoryController.createCategory(category, req);
  },
};

export {
  createCategory,
};
