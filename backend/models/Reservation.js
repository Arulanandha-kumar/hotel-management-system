const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    roomType: {
      type: String,
      required: true,
    },

    bedType: {
      type: String,
      required: true,
    },

    noofrooms: {
      type: Number,
      required: true,
      default: 1,
    },

    breakfast: {
      type: String,
      default: "No",
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);