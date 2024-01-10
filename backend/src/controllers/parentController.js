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
    return console.error("Error updating parent:", error);
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
  const { firstname, lastname, address, phone, email, password } = req.body;

  try {
    const parent = await Parent.signup({
      firstname,
      lastname,
      address,
      phone,
      email,
      password,
    });
    res.status(200).json(parent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* Delete a parent */

const deleteParent = async (req, res) => {
  const { id } = req.params;

  const parent = await Parent.findOneAndDelete({ _id: id });

  if (!parent) {
    return res.status(400).json({ error: "No such parent" });
  }

  return res.status(200).send("Parent deleted");
};

module.exports = {
  getAllParent,
  getParentById,
  createParent,
  updateParent,
  deleteParent,
};
