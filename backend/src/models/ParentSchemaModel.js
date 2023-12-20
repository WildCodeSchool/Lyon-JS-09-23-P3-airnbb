const mongoose = require("../../database/database");

const parentPostSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});
/*  ici on a mis 3 parametres, 1 c'est le nom du modéle, 2 cest le nom du schéma et 3 c'est le nom de la collection qui est déja existe dans la base de données */
const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
