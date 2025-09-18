// controller/review.js
import Review from "../model/reviews.js";

// Create a new review
export const create = async (req, res) => {
  try {
    const review = new Review(req.body); // Create a new review from request body
    await review.save(); // Save the review in the database
    res.status(201).json(review); // Send the created review back in the response
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reviews
export const getAll = async (req, res) => {
  try {
    const reviews = await Review.find(); // Retrieve all reviews
    res.json(reviews); // Send the list of reviews in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update review
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.updateOne({ _id: id }, req.body, { new: true });
    res.json(review);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Delete review
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.deleteOne({ _id: id });
    res.json(review);
  } catch (err) {
    res.json({ message: err.message });
  }
};
