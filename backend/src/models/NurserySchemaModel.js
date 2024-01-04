const mongoose = require("../../database/database");

const nurserySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    place_max: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

/* 3 parametres: 1er = nom choisi du model créé par le schéma (obligatoirement le même que le param 3); 2eme = nom du schéma; 3eme = nom de la collection existante */

const Nursery = mongoose.model("nursery", nurserySchema, "nursery");
module.exports = Nursery;
