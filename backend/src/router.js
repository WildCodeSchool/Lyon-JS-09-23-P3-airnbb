const express = require("express");

const router = express.Router();

const RequireAuthPro = require("./middlewares/RequireAuthPro");
const requireAuth = require("./middlewares/RequireAuth");

const {
  getAllParent,
  getParentById,
  createParent,
  loginParent,
  updateParent,
  deleteParent,
} = require("./controllers/parentController");

const {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
} = require("./controllers/childController");

const {
  getAllNurseries,
  getNurseryById,
  createNursery,
  updateNursery,
  deleteNursery,
  loginNursery,
} = require("./controllers/nurseryController");

const {
  getAllAvailabilities,
  getAvailabilityById,
  createAvailability,
  updateAvailability,
  deleteAvailability,
} = require("./controllers/availabilityController");

const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("./controllers/bookingController");

// Route to Create New Parent
router.post("/parent/", createParent);
// Route to Log in Parent
router.post("/parent/login", loginParent);
// Route to Log in Nursery
router.post("/nurserylogin", loginNursery);
// Route to create a nursery
router.post("/nursery/", createNursery);

router.use(requireAuth);
router.use(RequireAuthPro);
// Route to get one nursery
router.get("/nursery/:id", getNurseryById);
// ROUTE FOR COLLECTION "parent"
// Route to get a list of parent
router.get("/parent", requireAuth, getAllParent);
// Route to get one parent
router.get("/parent/:id", requireAuth, getParentById);

// Route to update a parent (with patch)
router.patch("/parent/:id", requireAuth, updateParent);

// Route to delete a parent
router.delete("/parent/:id", requireAuth, deleteParent);

// ROUTE FOR COLLECTION "child"
// Route to get a list of children
router.get("/child", requireAuth, getAllChildren);

// Route to get one child
router.get("/child/:id", requireAuth, getChildById);

// Route to create new child
router.post("/child/", requireAuth, createChild);

// Route to update a child (with patch)
router.patch("/child/:id", requireAuth, updateChild);

// Route to delete a child
router.delete("/child/:id", requireAuth, deleteChild);

// ROUTES FOR COLLECTION "nursery"
// Route to get a list of nurseries
router.get("/nursery", requireAuth, getAllNurseries);

// Route to update a nursery (with patch)
router.patch("/nursery/:id", requireAuth, updateNursery);

// Route to delete a nursery
router.delete("/nursery/:id", deleteNursery);

// ROUTES FOR COLLECTION "availability"
// Route to get a list of availabilities
router.get("/availability", requireAuth, getAllAvailabilities);

// Route to get  availability by nursery id
router.get("/availabilitybynursery", requireAuth, getAvailabilityById);

// Route to create new availability
router.post("/availability/", createAvailability);

// Route to update an availability (with patch)
router.patch("/availability/:id", updateAvailability);

// Route to delete an availability
router.delete("/availability/:id", deleteAvailability);

// ROUTE FOR COLLECTION "booking"
// Route to get a list of bookings
router.get("/booking", getAllBookings);

// Route to get one booking
router.get("/bookingnursery", getBookingById);

// Route to create new booking
router.post("/booking/", requireAuth, createBooking);

// Route to update a booking (with patch)
router.patch("/booking/:id", requireAuth, updateBooking);

// Route to delete a booking
router.delete("/booking/:id", requireAuth, deleteBooking);

module.exports = router;
