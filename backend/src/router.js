const express = require("express");

const router = express.Router();

// Import itemControllers module for handling item-related operations

const {
  getAllParent,
  getParentById,
  updateParent
} = require("./controllers/parentController");

// Route to get a list of parent
router.get("/parent", getAllParent);
router.get("/parent/:id", getParentById);

// Route to update a parent (with patch)
router.patch("/parent/:id", updateParent);

module.exports = router;

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
// const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
// router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

// module.exports = router;
