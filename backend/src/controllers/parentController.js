/* const databaseConnection = require("../../database/database");

const getAllParent = async (req, res) => {
  try {
    // ici on se connecte directement à la collection
    const { db } = databaseConnection.connection;
    const collection = db.collection("parent");
    const documents = await collection.find().toArray();

    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleParent = async (req, res) => {
  const { id } = req.params;

  try {
    if (!databaseConnection.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such parent" });
    }

    const parent = await Parent.findById(id);
    if (!parent) {
      return res.status(404).json({ error: "No such parent" });
    }

    res.status(200).json(parent);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllParent, getSingleParent };
 */
