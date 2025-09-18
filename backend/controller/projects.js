// controllers/project.controller.js
import Project from "../model/projects.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const create = async (req, res) => {
  try {
    const { title, category, description, key_features, github, privew } = req.body;

    let imageUrl = null;
    
    const imageLocalPath = req.file?.path
   
    if (imageLocalPath) {
      
      imageUrl = await uploadOnCloudinary(imageLocalPath); // upload to Cloudinary
      console.log(imageUrl)
    }

    const project = await Project.create({
      title,
      category,
      description,
      key_features,
      github,
      privew,
      image: imageUrl, // store Cloudinary URL
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
