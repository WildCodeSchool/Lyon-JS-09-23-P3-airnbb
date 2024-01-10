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

// extends parentPostSchema
parentPostSchema.statics.signup = async function sign({
  firstname,
  lastname,
  phone,
  address,
  email,
  password,
}) {
  if (!email || !password) {
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

  const parent = await this.create({
    firstname,
    lastname,
    phone,
    address,
    email,
    password: hash,
  });

  return parent;
};

// extends parentPostSchema
parentPostSchema.statics.login = async function log(email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const parent = await this.findOne({ email });

  if (!parent) {
    throw Error("échec d'authentification");
  }

  // compare input password with stored password using stored salt
  const match = await bcrypt.compare(password, parent.password);

  if (!match) {
    throw Error("échec d'authentification");
  }

  return parent;
};

const Parent = mongoose.model("parent", parentPostSchema, "parent");
module.exports = Parent;
