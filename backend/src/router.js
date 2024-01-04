const express = require("express");

const router = express.Router();

// Import itemControllers module for handling item-related operations

const {
  getAllParent,
  getParentById,
  createParent,
  updateParent,
  deleteParent,
} = require("./controllers/parentController");

// Route to get a list of parent
router.get("/parent", getAllParent);
router.get("/parent/:id", getParentById);

// Route to Create New Parent
router.post("/parent/", createParent);
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
