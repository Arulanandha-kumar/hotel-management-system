const Reservation = require("../models/Reservation");

// Create Reservation
exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);

    res.status(201).json({
      status: true,
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Get All Reservations
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      status: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Get Reservation By Id
exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        status: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      status: true,
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Update Reservation
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: true,
      message: "Reservation updated successfully",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Delete Reservation
exports.deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};