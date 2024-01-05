const Child = require("../models/ChildSchemaModel");

/* Get all children */
const getAllChildren = async (req, res) => {
  try {
    const documents = await Child.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Get one child */
const getChildById = async (req, res) => {
  const { id } = req.params;
  try {
    const child = await Child.findById(id);

    if (!child) {
      return res.status(404).json({ error: "Child not found" });
    }

    return res.status(200).json(child);
  } catch (error) {
    console.error("Error getting child:", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Update a child */
const updateChild = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedChild = await Child.findByIdAndUpdate(id, { ...req.body });
    if (!updatedChild) {
      return res.status(404).json({ error: "No such child" });
    }
    return res.status(200).json(updatedChild);
  } catch (error) {
    return console.error("Error updating child:", error);
  }
};

/* Create new child */
const createChild = async (req, res) => {
  const {
    parent_id: parentId,
    firstname,
    lastname,
    birthday,
    walking,
    disabled,
    allergy,
  } = req.body;

  try {
    const child = await Child.create({
      parent_id: parentId,
      firstname,
      lastname,
      birthday,
      walking,
      disabled,
      allergy,
    });
    res.status(200).json(child);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* Delete a child */
const deleteChild = async (req, res) => {
  const { id } = req.params;

  const child = await Child.findOneAndDelete({ _id: id });

  if (!child) {
    return res.status(400).json({ error: "No such child" });
  }

  return res.status(200).send("Child deleted");
};

module.exports = {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
};
