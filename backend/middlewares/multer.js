// middlewares/multer.js
import multer from "multer";

const storage = multer.memoryStorage(); // ✅ no temp folder needed

export const upload = multer({ storage });
