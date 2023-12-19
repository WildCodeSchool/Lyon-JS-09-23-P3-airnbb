const databaseConnection = require("../../database/database");

const Parent = require("../models/parentsModel");

const getAllParent = async (req, res) => {
  try {
    // ici on se connecte directement à la collection
    const { db } = databaseConnection.connection;
    const collection = db.collection("parent");
    const documents = await collection.find().toArray();
    //  console.log(databaseConnection.body);

    res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* UPDATE */
const updateParent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!databaseConnection.connection.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such parent" });
    }

    const parent = await Parent.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!parent) {
      // console.log(parent);
      return res.status(400).json({ error: "No no such parent" });
    }

    return res.status(200).json(parent);
  } catch (error) {
    // console.log("coucou");
    // console.log(error);
    // console.log("coucou1");

    // console.log(databaseConnection.connection.Types.ObjectId)
    // console.log("coucou2");

    // console.log(databaseConnection);
    // console.log("coucou3");

    // console.log(databaseConnection.connection);
    // console.log("coucou4");

    // console.log(databaseConnection.connection.Types);
    // console.log("coucou5");

    return res.sendStatus(500);
  }
};

module.exports = { getAllParent, updateParent }; // updateParent
