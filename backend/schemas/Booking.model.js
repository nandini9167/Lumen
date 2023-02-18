// Loading mongoose library
const mongoose = require("mongoose");

// Defining Schema for Event table using mongoose
const BookingSchema = new mongoose.Schema({
  booking_id: Number,
  event_id: Number,
  participant_name: String,
  participant_email: String,
  participant_phone: String,
});

// Exporting Schema for use in other files
module.exports =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
