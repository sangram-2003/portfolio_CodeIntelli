import express from "express";
import * as projectController from "../controller/projects.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router
  .post("/", upload.single("image"), projectController.create)
  .get("/", projectController.getAll)
  .patch("/:id", upload.single("image"), projectController.update)
  .delete("/:id", projectController.remove);

export default router;
