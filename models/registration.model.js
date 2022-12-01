import { Schema, model } from "mongoose";

const RegistrationSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  { timestamps: true }
);

export default model("Registration", RegistrationSchema);
