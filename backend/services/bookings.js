// Creating express router
const router = require("express").Router();
// Importing Event Model
const Event = require("../schemas/Event.model");
// Importing Booking Model
const Booking = require("../schemas/Booking.model");

// Defining route `/bookings/`
router
  .route("/")
  // GET Request handler on route `/bookings/` to get all the bookings from the database
  .get(async (req, res) => {
    try {
      // Fetch all bookings
      const allBookings = await Booking.find({}, { _id: 0 });

      // Send the result with status true to frontend
      res.send({
        status: true,
        result: allBookings,
      });
    } catch (error) {
      // If there is any error, print it and send status false with error message to frontend
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  })
  // POST Request handler on route `/bookings/` to add a new booking to the database
  .post(async (req, res) => {
    try {
      // Extract data from request body
      const data = req.body;

      // Search for the event for which booking has to be made using event_id
      const event = await Event.findOne({ event_id: data.event_id });
      if (!event) {
        // If there is not event, send status false, with error message to frontend
        res.send({
          status: false,
          error: "No Such event",
        });
      } else {
        // Search for all bookings done for the particular event using event_id and extract the count of bookings
        const bookingsDone = (await Booking.find({ event_id: data.event_id }))
          .length;
        // Calculate the available seats by the difference of max_seats for an event and the bookings done for the event
        let availableSeats = event.max_seats - bookingsDone;

        if (availableSeats > 0) {
          // If seats are available, creating a new booking and save to database
          const newBooking = new Booking(data);
          await newBooking.save();

          // Send status true with message to frontend
          res.send({
            status: true,
            result: "Saved new Booking",
          });
        } else {
          // If no seats are available, send status false with error to frontend
          res.send({
            status: false,
            error: "No seats are available",
          });
        }
      }
    } catch (error) {
      // If there is any error, print it and send status false with error message to frontend
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  });

// Export the router
module.exports = router;
