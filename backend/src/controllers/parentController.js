const Parent = require("../models/ParentSchemaModel");

/* get all parent  */
const getAllParent = async (req, res) => {
  try {
    const documents = await Parent.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* get single parent  */

const getParentById = async (req, res) => {
  const { id } = req.params;
  try {
    const parent = await Parent.findById(id);

    if (!parent) {
      return res.status(404).json({ error: "Parent not found" });
    }

    return res.status(200).json(parent);
  } catch (error) {
    console.error("Error getting parent:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Create new Parent  */

const createParent = async (req, res) => {
  try {
    const newParent = await Parent.create(req.body);
    res.status(201).json(newParent);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

module.exports = {
  getAllParent,
  getParentById,
  createParent,
};
