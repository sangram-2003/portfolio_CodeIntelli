import express from "express";
import * as dsaController from "../controller/dsa.js";

const router = express.Router();

// Routes
router
  .post("/", dsaController.create)        // Create new DSA item
  .get("/", dsaController.getAll)         // Get all DSA items
  .patch("/:id", dsaController.update)    // Update a DSA item
  .delete("/:id", dsaController.remove);  // Delete a DSA item

export default router;
