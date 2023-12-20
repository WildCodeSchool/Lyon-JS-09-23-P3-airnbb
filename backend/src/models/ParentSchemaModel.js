const mongoose = require("../../database/database");

const parentPostSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});
/* ici on a trois parametre 1 c'est nom du model, 2 nom du schema et 3 c'est le nom de la collection */
const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
