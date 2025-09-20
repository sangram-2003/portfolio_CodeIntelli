// index.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cloudinary from "cloudinary";

// Load environment variables
dotenv.config();

// Import routes
import projectRouter from "./routes/projects.js";
import reviewRouter from "./routes/reviews.js";
import contactRouter from "./routes/contacts.js";
import dsaRouter from "./routes/dsa.js";

const app = express();

// ✅ Cloudinary setup (optional, for file uploads)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// ✅ CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

// ✅ Parse JSON and URL-encoded form data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Parse cookies
app.use(cookieParser());

// ✅ Serve static files (uploads, public assets)
app.use(express.static("public"));

// ✅ MongoDB connection
const mongoUri = process.env.MONGODB_URL;
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => console.log("✅ Database connected:", conn.connection.host))
  .catch((err) => console.error("❌ DB connection error:", err.message));

// ✅ Routes
app.use("/projects", projectRouter);
app.use("/reviews", reviewRouter);
app.use("/contacts", contactRouter);
app.use("/dsa", dsaRouter);

// ✅ Handle 404 routes
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});

// ✅ Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("⚠️ Unhandled Rejection:", err.message);
});
