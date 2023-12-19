const databaseConnection = require("../../database/database");

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

module.exports = getAllParent;
