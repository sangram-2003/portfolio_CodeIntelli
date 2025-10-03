// index.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";


// ✅ Load environment variables
dotenv.config();

// ✅ Import routes
import projectRouter from "./routes/projects.js";
import reviewRouter from "./routes/reviews.js";
import contactRouter from "./routes/contacts.js";
import dsaRouter from "./routes/dsa.js";

const app = express();

// ✅ Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ CORS setup
app.use(
  cors({
    origin: "*", // no trailing slash
    credentials: true,
  })
);

// ✅ Parse JSON and form data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Parse cookies
app.use(cookieParser());

// ✅ Serve static files
app.use(express.static("public"));

// ✅ MongoDB connection
const mongoUri = process.env.MONGODB_URL || process.env.MONGO_URI;

if (!mongoUri) {
  console.error("❌ MongoDB URL is missing! Please set MONGODB_URL in .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => console.log("✅ Database connected:", conn.connection.host))
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  });

// ✅ Routes
app.use("/projects", projectRouter);
app.use("/reviews", reviewRouter);
app.use("/contacts", contactRouter);
app.use("/dsa", dsaRouter);

// ✅ 404 handler
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
  process.exit(1);
});
