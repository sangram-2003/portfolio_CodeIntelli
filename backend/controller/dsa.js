// controllers/dsa.controller.js
import Dsa from "../model/dsa.js";

// ✅ Create a new Dsa
export const create = async (req, res) => {
  try {
    const dsa = new Dsa(req.body);
    await dsa.save();
    return res.status(201).json(dsa);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ✅ Get all Dsas
export const getAll = async (req, res) => {
  try {
    const dsas = await Dsa.find();
    return res.status(200).json(dsas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ✅ Update Dsa
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const dsa = await Dsa.findByIdAndUpdate(id, req.body, { new: true });

    if (!dsa) {
      return res.status(404).json({ message: "DSA not found" });
    }

    return res.status(200).json(dsa);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// ✅ Delete Dsa
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const dsa = await Dsa.findByIdAndDelete(id);

    if (!dsa) {
      return res.status(404).json({ message: "DSA not found" });
    }

    return res.status(200).json({ message: "DSA deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
