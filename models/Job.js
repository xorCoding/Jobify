import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "Pending",
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Remote", "Internship"],
      default: "Full-Time",
    },
    jobLocation: {
      type: String,
      default: "My city",
      required: [true, "Please provide job location"],
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

export default mongoose.model("Job", JobSchema);
