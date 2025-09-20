// controllers/project.controller.js
import Project from "../model/projects.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


import Project from "../models/project.js";   // make sure correct path
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const create = async (req, res) => {
  try {
    const { title, category, description, key_features, github, privew } = req.body;

    // Validation
    if (!title || !category || !description) {
      return res.status(400).json({ error: "Title, category, and description are required." });
    }

    let imageUrl = null;

    // Check if multer uploaded a file
    if (req.file?.path) {
      try {
        imageUrl = await uploadOnCloudinary(req.file.path); // upload to Cloudinary
        if (!imageUrl) {
          return res.status(500).json({ error: "Image upload failed." });
        }
      } catch (err) {
        return res.status(500).json({ error: "Cloudinary error: " + err.message });
      }
    }

    // Create project
    const project = await Project.create({
      title,
      category,
      description,
      key_features,
      github,
      privew,
      image: imageUrl, // Cloudinary URL
    });

    return res.status(201).json(project);
  } catch (err) {
    console.error("Create project error:", err);
    return res.status(500).json({ error: err.message });
  }
};



// Get All Projects
export const getAll = async (req, res) => {
  try {
    // Your logic for fetching projects
 const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Project
export const update = async (req, res) => {
  try {
    // Your logic for updating
    res.status(200).json({ message: "Project updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Don't use reserved keyword "delete"
export const remove = async (req, res) => {
  try {
    // Your logic for deleting
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
