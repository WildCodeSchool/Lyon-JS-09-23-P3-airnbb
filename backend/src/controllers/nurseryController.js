const jwt = require("jsonwebtoken");
const Nursery = require("../models/NurserySchemaModel");

/* Get all nurseries */
const getAllNurseries = async (req, res) => {
  try {
    const documents = await Nursery.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Get single nursery */
const getNurseryById = async (req, res) => {
  const { id } = req.params;
  try {
    const nursery = await Nursery.findById(id);

    if (!nursery) {
      return res.status(404).json({ error: "Nursery not found" });
    }

    return res.status(200).json(nursery);
  } catch (error) {
    console.error("Error getting nursery:", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Update nursery */
const updateNursery = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNursery = await Nursery.findByIdAndUpdate(id, { ...req.body });
    if (!updatedNursery) {
      return res.status(404).json({ error: "No such nursery" });
    }
    return res.status(200).json(updatedNursery);
  } catch (error) {
    return console.error("Error updating nursery:", error);
  }
};

// Preparation token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

/* Create new nursery */
const createNursery = async (req, res) => {
  const { name, address, email, password, place_max: placeMax } = req.body;

  try {
    const nursery = await Nursery.signup({
      name,
      address,
      email,
      password,
      place_max: placeMax,
    });
    const token = createToken(nursery.id);
    res.status(200).json({ nursery, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginNursery = async (req, res) => {
  const { email, password } = req.body;
  try {
    const nursery = await Nursery.login(email, password);
    const token = createToken(nursery.id); // Creation token
    res.status(200).json({ nursery, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* Delete a nursery */
const deleteNursery = async (req, res) => {
  const { id } = req.params;

  const nursery = await Nursery.findOneAndDelete({ _id: id });

  if (!nursery) {
    return res.status(400).json({ error: "No such nursery" });
  }

  return res.status(200).send("Nursery deleted");
};

module.exports = {
  getAllNurseries,
  getNurseryById,
  createNursery,
  updateNursery,
  deleteNursery,
  loginNursery,
};
