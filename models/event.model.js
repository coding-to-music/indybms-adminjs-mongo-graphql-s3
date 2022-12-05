import { Schema, model } from "mongoose";

const EventSchema = Schema(
  {
    // Name of the event
    title: {
      type: String,
      required: true,
    },
    // Event description
    description: {
      type: String,
      required: true,
    },
    // Event Category
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // User information who registered for the event
    registrations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Registration",
      },
    ],
    // Maximum number of allowed registrations
    maxAllowedRegistrations: {
      type: Number,
      required: true,
    },
    // Event Poster
    coverImage: {
      type: String,
      required: true,
    },
    // Event gallery
    gallery: {
      type: [String],
    },
    location: {
      type: String,
      required: true,
    },
    // Event Start Date and Time
    date: {
      type: Date,
      required: true,
    },
    // Age Restriction
    ageRestriction: {
      type: Boolean,
      required: true,
    },
    // Event Status
    status: {
      type: String,
      enum: [
        "PENDING",
        "REJECTED",
        "APPROVED",
        "COMPLETED",
        "UPCOMING",
        "IN_PROGRESS",
      ],
      default: "PENDING",
    },
    // Event Registration Fee
    registrationFee: {
      type: Number,
    },
    // Owner details
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Event", EventSchema);
