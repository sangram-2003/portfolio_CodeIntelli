// utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload failed:", error);
          reject(error);
        } else {
          resolve(result.secure_url); // ✅ return uploaded file URL
        }
      }
    );

    stream.end(fileBuffer); // ✅ upload from buffer
  });
};

export { uploadOnCloudinary };
