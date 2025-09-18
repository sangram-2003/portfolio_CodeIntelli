import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  comment: { type: String, required: true },
  img: { type: String },
});

// ✅ Correct export for ESM
const Review = mongoose.model("Review", reviewSchema);

export default Review;
