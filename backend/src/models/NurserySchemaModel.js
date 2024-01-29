const bcrypt = require("bcrypt");
const validator = require("validator");
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
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    place_max: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// extends parentPostSchema
nurserySchema.statics.signup = async function sign({
  name,
  address,
  email,
  password,
  place_max: placeMax,
}) {
  if (email === null || password === null) {
    throw Error("Remplir email et password correctement");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email n'est pas valide");
  }
  // check if : 8 char + 1 lowercase + 1 uppercase + 1 special char
  if (!validator.isStrongPassword(password)) {
    throw Error("Password n'est pas valide");
  }

  // check if email is in db
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email déjà utilisé");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const nursery = await this.create({
    name,
    address,
    email,
    password: hash,
    place_max: placeMax,
  });

  return nursery;
};

// extends parentPostSchema
nurserySchema.statics.login = async function log(email, password) {
  if (email === null || password === null) {
    throw Error("All fields must be filled");
  }

  const nursery = await this.findOne({ email });

  if (!nursery) {
    throw Error("Echec d'authentification");
  }

  // compare input password with stored password using stored salt
  const match = await bcrypt.compare(password, nursery.password);

  if (!match) {
    throw Error("Echec d'authentification");
  }

  return nursery;
};

/* 3 parametres: 1er = nom choisi du model créé par le schéma (obligatoirement le même que le param 3); 2eme = nom du schéma; 3eme = nom de la collection existante */

const Nursery = mongoose.model("nursery", nurserySchema, "nursery");
module.exports = Nursery;
