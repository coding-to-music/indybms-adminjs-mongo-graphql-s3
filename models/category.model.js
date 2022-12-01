import { Schema, model } from "mongoose";

const CategorySchema = Schema(
  {
    // Name of the Category
    name: {
      type: String,
      required: true,
    },
    // Events within a Category
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

export default model("Category", CategorySchema);
