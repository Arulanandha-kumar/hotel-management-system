const express = require("express");

const router = express.Router();

const {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");

router.post("/", createReservation);

router.get("/", getReservations);

router.get("/:id", getReservation);

router.put("/:id", updateReservation);

router.delete("/:id", deleteReservation);

module.exports = router;