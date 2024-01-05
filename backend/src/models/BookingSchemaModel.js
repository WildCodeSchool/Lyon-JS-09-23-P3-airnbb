const mongoose = require("../../database/database");

const bookingSchema = new mongoose.Schema(
  {
    availability_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "availability",
      required: true,
      validate: {
        async validator(value) {
          // Vérifier si le availability_id existe dans la collection "availability"
          const availability = await mongoose
            .model("availability")
            .findById(value);
          if (availability === null) {
            return false;
          }
          return true;
        },
        message: "Availability with this ID does not exist.",
      },
    },
    child_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "child",
      required: true,
      validate: {
        async validator(value) {
          // Vérifier si le child_id existe dans la collection "child"
          const child = await mongoose.model("child").findById(value);
          if (child === null) {
            return false;
          }
          return true;
        },
        message: "Child with this ID does not exist.",
      },
    },
  },
  { timestamps: true }
);

/* 3 parametres: 1er = nom choisi du model créé par le schéma (obligatoirement le même que le param 3); 2eme = nom du schéma; 3eme = nom de la collection existante */

const Booking = mongoose.model("booking", bookingSchema, "booking");
module.exports = Booking;
