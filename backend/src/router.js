const express = require("express");

const router = express.Router();

// Import itemControllers module for handling item-related operations

const {
  getAllParent,
  getParentById,
  createParent,
  loginParent,
  updateParent,
  deleteParent,
} = require("./controllers/parentController");

// Route to get a list of parent
router.get("/parent", getAllParent);
router.get("/parent/:id", getParentById);

// Route to Create New Parent
router.post("/parent/", createParent);
// Route to Log in Parent
router.post("/parent/login", loginParent);
// Route to update a parent (with patch)
router.patch("/parent/:id", updateParent);

// Route to delete a parent
router.delete("/parent/:id", deleteParent);

// ROUTE FOR COLLECTION "child"
const {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
} = require("./controllers/childController");

// Route to get a list of children
router.get("/child", getAllChildren);

// Route to get one child
router.get("/child/:id", getChildById);

// Route to create new child
router.post("/child/", createChild);

// Route to update a child (with patch)
router.patch("/child/:id", updateChild);

// Route to delete a child
router.delete("/child/:id", deleteChild);

// ROUTES FOR COLLECTION "nursery"
const {
  getAllNurseries,
  getNurseryById,
  createNursery,
  updateNursery,
  deleteNursery,
} = require("./controllers/nurseryController");

// Route to get a list of nurseries
router.get("/nursery", getAllNurseries);

// Route to get one nursery
router.get("/nursery/:id", getNurseryById);

// Route to create a nursery
router.post("/nursery/", createNursery);

// Route to update a nursery (with patch)
router.patch("/nursery/:id", updateNursery);

// Route to delete a nursery
router.delete("/nursery/:id", deleteNursery);

// ROUTES FOR COLLECTION "availability"
const {
  getAllAvailabilities,
  getAvailabilityById,
  createAvailability,
  updateAvailability,
  deleteAvailability,
} = require("./controllers/availabilityController");

// Route to get a list of availabilities
router.get("/availability", getAllAvailabilities);

// Route to get one availability
router.get("/availability/:id", getAvailabilityById);

// Route to create new availability
router.post("/availability/", createAvailability);

// Route to update an availability (with patch)
router.patch("/availability/:id", updateAvailability);

// Route to delete an availability
router.delete("/availability/:id", deleteAvailability);

// ROUTE FOR COLLECTION "booking"
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("./controllers/bookingController");

// Route to get a list of bookings
router.get("/booking", getAllBookings);

// Route to get one booking
router.get("/booking/:id", getBookingById);

// Route to create new booking
router.post("/booking/", createBooking);

// Route to update a booking (with patch)
router.patch("/booking/:id", updateBooking);

// Route to delete a booking
router.delete("/booking/:id", deleteBooking);

module.exports = router;
