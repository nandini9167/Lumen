// Loading mongoose library
const mongoose = require("mongoose");

// Defining Schema for Event table using mongoose
const EventSchema = new mongoose.Schema({
  event_id: Number,
  event_name: String,
  event_description: String,
  event_date: String,
  organizer_email: String,
  organizer_phone: String,
  event_type: String,
  event_location: String,
  event_status: String,
  max_seats: Number,
});

// Exporting Schema for use in other files
module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
