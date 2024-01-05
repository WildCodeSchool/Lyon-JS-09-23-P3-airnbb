const Booking = require("../models/BookingSchemaModel");

/* Get all bookings  */
const getAllBookings = async (req, res) => {
  try {
    const documents = await Booking.find().exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Get single booking  */
const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.status(200).json(booking);
  } catch (error) {
    console.error("Error getting booking:", error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Create new booking */
const createBooking = async (req, res) => {
  const { availability_id: availibilityId, child_id: childId } = req.body;
  try {
    const newBooking = await Booking.create({
      availability_id: availibilityId,
      child_id: childId,
    });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

/* Update a booking */
const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(id, { ...req.body });
    if (!updatedBooking) {
      return res.status(404).json({ error: "No such Booking" });
    }
    return res.status(200).json(updatedBooking);
  } catch (error) {
    return console.error("Error updating booking:", error);
  }
};

/* Delete a booking */

const deleteBooking = async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findOneAndDelete({ _id: id });

  if (!booking) {
    return res.status(400).json({ error: "No such booking" });
  }

  return res.status(200).send("Booking deleted");
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
