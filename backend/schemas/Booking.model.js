const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  booking_id: Number,
  event_id: Number,
  participant_name,
  participant_email: String,
  participant_phone: String,
});

module.exports =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
