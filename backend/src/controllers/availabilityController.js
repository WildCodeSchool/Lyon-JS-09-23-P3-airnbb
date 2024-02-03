const Availability = require("../models/AvailabilitySchemaModel");

/* Get all availabilities */
const getAllAvailabilities = async (req, res) => {
  try {
    const documents = await Availability.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Get all availability by id nursery *********************************************** */

// eslint-disable-next-line consistent-return
const getAvailabilityById = async (req, res) => {
  try {
    const { nurseryId } = req.query;

    if (!nurseryId) {
      return res.status(400).json({ error: "Nursery ID is required " });
    }

    // check if availabilities for the nursery id
    const availabilityNursery = await Availability.find({
      nursery_id: nurseryId,
    }).exec();

    // If no availabilities found
    if (availabilityNursery.length === 0) {
      return res.status(200).json([]);
    }

    // If availabilities found, return them
    res.status(200).json(availabilityNursery);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Create a new availability********************************************************************* */

const createAvailability = async (req, res) => {
  const { nursery_id: nurseryId, is_booked: isBooked, date, place } = req.body;

  try {
    const availability = await Availability.create({
      nursery_id: nurseryId,
      is_booked: isBooked,
      date,
      place,
    });
    res.status(200).json(availability);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* Update an availability */
const updateAvailability = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAvailability = await Availability.findByIdAndUpdate(id, {
      ...req.body,
    });
    if (!updatedAvailability) {
      return res.status(404).json({ error: "No such availability" });
    }
    return res.status(200).json(updatedAvailability);
  } catch (error) {
    return console.error("Error updating availability");
  }
};

/* Delete an availability */
const deleteAvailability = async (req, res) => {
  const { id } = req.params;

  const availability = await Availability.findOneAndDelete({ _id: id });

  if (!availability) {
    return res.status(400).json({ error: "No such availability" });
  }
  return res.status(200).send("Availability deleted");
};

module.exports = {
  getAllAvailabilities,
  getAvailabilityById,
  createAvailability,
  updateAvailability,
  deleteAvailability,
};
