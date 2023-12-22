const mongoose = require("../../database/database");

const parentPostSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});

/* 3 parametres:
1er = nom choisi du model créé par le schéma;
2eme = nom du schéma;
3eme = nom de la collection existante */
// mongoose.model("nomModel", nomSchema, "nomCollection")

const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
