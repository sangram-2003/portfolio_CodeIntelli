import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
console.log(process.env.MONGODB_URL ,"dsd")
console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "Loaded ✅" : "Missing ❌",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded ✅" : "Missing ❌"
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // delete local file after upload
    fs.unlinkSync(localFilePath);

    // return only the URL
    return response.secure_url;  // 👈 fix
  } catch (error) {
    if (localFilePath) fs.unlinkSync(localFilePath);
    console.error("Cloudinary upload failed:", error);
    return null;
  }
};




export {uploadOnCloudinary}