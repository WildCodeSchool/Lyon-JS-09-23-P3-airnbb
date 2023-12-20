const mongoose = require("../../database/database");

const parentPostSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});
/** ici on a mis deux nom parent parce que le premier c'est le schema et le deuxieme c'est le nom de la collection */
const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
