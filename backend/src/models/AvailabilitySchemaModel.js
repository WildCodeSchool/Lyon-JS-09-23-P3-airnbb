const mongoose = require("../../database/database");

const availabilitySchema = new mongoose.Schema(
  {
    is_booked: {
      type: Boolean,
    },
    date: {
      type: Date,
      required: true,
      validate: {
        //  La fonction vérifie si la date est dans le futur.
        validator(value) {
          return value.getTime() > Date.now();
        },
        message: "Availability date must be in the future.",
      },
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
          if (nursery === null) {
            return false;
          }
          return true;
        },
        message: "Nursery with this ID does not exist.",
      },
    },
  },
  { timestamps: true }
);
const Availability = mongoose.model(
  "availability",
  availabilitySchema,
  "availability"
);
module.exports = Availability;
