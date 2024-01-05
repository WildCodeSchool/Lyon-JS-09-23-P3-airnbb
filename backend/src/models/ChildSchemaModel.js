const mongoose = require("../../database/database");

const childSchema = new mongoose.Schema(
  {
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parent",
      required: true,
      validate: {
        async validator(value) {
          // Vérifier si le parent_id existe dans la collection "parent"
          const parent = await mongoose.model("parent").findById(value);
          if (parent === null) {
            return false;
          }
          return true;
        },
        message: "Parent with this ID does not exist.",
      },
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    walking: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
    allergy: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

/* 3 parametres: 1er = nom choisi du model créé par le schéma (obligatoirement le même que le param 3); 2eme = nom du schéma; 3eme = nom de la collection existante */

const Child = mongoose.model("child", childSchema, "child");
module.exports = Child;
