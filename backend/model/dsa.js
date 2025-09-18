import mongoose from "mongoose";

const { Schema } = mongoose;


const dsaSchema = new Schema({
  question: { type: String },
  type: { type: String },
  category: { type: String },
});

// Export the task model
const Dsa = mongoose.model("Dsa", dsaSchema);

export default Dsa;