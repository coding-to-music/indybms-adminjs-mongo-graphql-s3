const { Category } = require("../models/index");
const { CategoryValidation } = require("../middleware/index");

let Controller = {};

Controller.getAllCategories = async (req) => {
  try {
    let categories = await Category.find({});
    return categories;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findCategoryById = async (id, req) => {
  try {
    let foundCategory = await Category.findById(id)
      .populate("events")
    return foundCategory;
  } catch (err) {
    throw Error(err);
  }
};

Controller.createCategory = async (category, req) => {
  const { error } = CategoryValidation.create(category);
  if (error) {
    throw Error(error);
  }
  try {
    let createdCategory = await Category.create({
      name: category.name,
    });
    return createdCategory;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findCategoryByName = async (name, req) => {
  try {
    let foundCategories = await Category.find({ "name": { "$regex": name, "$options": "i" } });
    return foundCategories;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = Controller;
