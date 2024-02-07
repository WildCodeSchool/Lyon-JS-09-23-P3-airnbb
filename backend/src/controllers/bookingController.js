const Booking = require("../models/BookingSchemaModel");

/* Get all bookings  */
const getAllBookings = async (req, res) => {
  try {
    const documents = await Booking.find()
      .populate("child_id", "firstname lastname")
      .exec();
    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Get single booking  */
const getBookingById = async (req, res) => {
  try {
    const { nurseryId } = req.query;
    if (!nurseryId) {
      return res.status(400).json({ error: " ID is required " });
    }

    // Find Booking documents where _id matches the provided
    const bookings = await Booking.find({})
      .populate({
        path: "availability_id",
        match: { nursery_id: nurseryId },
        select: "_id date",
        populate: {
          path: "nursery_id",
          model: "nursery",
          select: "name address",
        },
      })
      .populate({
        path: "child_id",
        select: "firstname lastname",

        populate: {
          path: "parent_id",
          model: "parent",
          select: "firstname lastname",
        },
      })
      .exec();

    // Filter out the bookings where availability_id is not found
    const filteredBookings = bookings.filter(
      (booking) => booking.availability_id !== null
    );

    // Return the filtered and populated bookings
    return res.status(200).json(filteredBookings);
  } catch (error) {
    console.error("Error fetching data:", error);
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
// async (req, res) => {
//   try {
//     const { avId } = req.query;
//     if (!avId) {
//       return res.status(400).json({ error: "Availability ID is required " });
//     }

//     // Find Booking documents where availability_id matches the provided avId
//     const bookings = await Booking.find({})
//       .populate({
//         path: "availability_id",
//         match: { nursery_id: { $eq: avId } },
//         select: "_id", // Selecting only the _id field of availability document
//       })
//       .exec();

//     // Filter out the bookings where availability_id is not found
//     const filteredBookings = bookings.filter(
//       (booking) => booking.availability_id !== null
//     );

//     // Return the filtered bookings
//     return res.status(200).json(filteredBookings);
