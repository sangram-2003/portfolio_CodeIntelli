import express from "express";
import * as contactController from "../controller/contacts.js";

const Router = express.Router();

Router
  .post("/", contactController.create)
  .get("/", contactController.getAll)
  .patch("/:id", contactController.update)
  .delete("/:id", contactController.remove);  // ✅ use 'remove'

export default Router;
