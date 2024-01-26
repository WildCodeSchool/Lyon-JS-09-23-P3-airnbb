require("dotenv").config();
const jwt = require("jsonwebtoken");
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

const createToken = (_id) => {
  return jwt.sign({ id: _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
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
    const token = createToken(parent.id);
    res.status(200).json({ parent, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* Login Parent */

const loginParent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const parent = await Parent.login(email, password);

    // create a token
    const token = createToken(parent.id);
    const { firstname, lastname, _id } = parent;
    res.status(200).json({ firstname, lastname, _id, token });
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
  loginParent,
  updateParent,
  deleteParent,
};
