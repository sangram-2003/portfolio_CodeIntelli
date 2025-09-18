import Project from "../model/projects.js";

export const create = async (req, res) => {
  try {
    const { title, category, description, key_features, github, privew } = req.body;
    const image = req.file ? req.file.filename : null;

    const project = await Project.create({
      title,
      category,
      description,
      key_features,
      github,
      privew,
      image,
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
