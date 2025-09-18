import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, default: "" },
    key_features: { type: String, default: "" },
    github: { type: String, default: "" },
    privew: { type: String, default: "" },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
