const mongoose = require("../../database/database");

const availabilitySchema = new mongoose.Schema(
  {
    is_booked: {
      type: Boolean,
    },
    date: {
      type: Date,
      required: true,
    },
    place: {
      type: Number,
    },
    nursery_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nursery",
      required: true,
      validate: {
        async validator(value) {
          // Vérifier si le nursery_id existe dans la collection "nursery"
          const nursery = await mongoose.model("nursery").findById(value);
          return !!nursery;
        },
        message: "Nursery with this ID does not exist.",
      },
    },
  },
  { timestamps: true }
);

/* 3 parametres: 1er = nom choisi du model créé par le schéma (obligatoirement le même que le param 3); 2eme = nom du schéma; 3eme = nom de la collection existante */

const Availability = mongoose.model(
  "availability",
  availabilitySchema,
  "availability"
);
module.exports = Availability;
