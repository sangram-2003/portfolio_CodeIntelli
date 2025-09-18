import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config({ path: ".env" });

// Import routes
import projectRouter from "./routes/projects.js";
import reviewRouter from "./routes/reviews.js";
import contactRouter from "./routes/contacts.js";
import dsaRouter from "./routes/dsa.js";

const server = express();

// ✅ CORS setup
server.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// ✅ Parse JSON and form data
server.use(express.json({ limit: "16kb" }));
server.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Serve static files (like uploaded images)
server.use(express.static("public"));

// ✅ Parse cookies
server.use(cookieParser());

// ✅ MongoDB connection
const mongoUri = `${process.env.MONGODB_URL}?retryWrites=true&w=majority`;

(async () => {
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log("✅ Database connected:", conn.connection.host);
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }
})();

// ✅ Routes
server.use("/projects", projectRouter);
server.use("/reviews", reviewRouter);
server.use("/contacts", contactRouter);
server.use("/dsa", dsaRouter);

// ✅ Start server
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});

// ✅ Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("⚠️ Unhandled Rejection:", err.message);
});
