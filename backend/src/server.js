import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const server = express();
const port = process.env.APP_PORT;
// server.use(cors());
server.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zpaegds.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    server.listen(port, () => {});
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
