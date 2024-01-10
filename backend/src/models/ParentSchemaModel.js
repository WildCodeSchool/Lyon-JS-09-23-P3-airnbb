const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("../../database/database");

const parentPostSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, require: true },
});

parentPostSchema.statics.signup = async function sign({
  firstname,
  lastname,
  phone,
  address,
  email,
  password,
}) {
  console.info(firstname, lastname, address, phone, email, password);
  // Valider toutes les entrées
  if (!email || !password) {
    throw Error("Remplir email et password correctement");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email n'est pas valide");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password n'est pas valide");
  }
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email déjà utilisé");
  }

  // Crypter (le salt génère un hash)
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const parent = await this.create({
    firstname,
    lastname,
    phone,
    address,
    email,
    password: hash,
  });
  console.info(parent);
  return parent;
};

const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
