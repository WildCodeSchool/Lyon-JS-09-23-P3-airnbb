require("dotenv").config();

const databaseConnection = require("mongoose");

databaseConnection
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zpaegds.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    console.info("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = databaseConnection;
