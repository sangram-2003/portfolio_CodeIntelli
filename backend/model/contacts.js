import mongoose from "mongoose";

const { Schema } = mongoose;


const contactSchema = new Schema({
  name: { type: String },

  email: { type: String },

  message: { type: String },
  view: { type: Boolean },
});

// Export the task model
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;