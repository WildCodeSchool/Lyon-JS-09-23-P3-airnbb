const Parent = require("../models/parentsModel");

const getAllParent = async (req, res) => {
  try {
    const documents = await Parent.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update
const updateParent = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedParent = await Parent.findByIdAndUpdate(id, { ...req.body });
    if (!updatedParent) {
      return res.status(404).json({ error: "No such parent" });
    }
    return res.status(200).json(updatedParent);
  } catch (error) {
    console.error("Error updating parent:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllParent, updateParent };
