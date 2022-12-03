import { Schema, model } from "mongoose";

const CategorySchema = Schema(
  {
    // Name of the Category
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Category", CategorySchema);
