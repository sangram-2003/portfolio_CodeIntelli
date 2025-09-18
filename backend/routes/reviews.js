import express from "express";
import * as reviewController from "../controller/review.js";

const Router = express.Router();

Router
  .post("/", reviewController.create)
  .get("/", reviewController.getAll)
  .patch("/:id", reviewController.update)
  .delete("/:id", reviewController.remove);  // changed

export default Router;
