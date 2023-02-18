const router = require("express").Router();
const Event = require("../schemas/Event.model");
const Booking = require("../schemas/Event.model");

router
  // Defining route `/bookings/`
  .route("/")
  // GET Request handler on route `/bookings/`
  .get(async (req, res) => {
    try {
      const allBookings = await Booking.find({}, { _id: 0 });
      res.send({
        status: true,
        result: allBookings,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  })
  // POST Request handler on route `/bookings/`
  .post(async (req, res) => {
    try {
      const data = req.body.data;

      // Check if seats are available in event
      const event = await Event.findOne({ event_id: data.event_id });
      if (!event) {
        res.send({
          status: false,
          error: "No Such event",
        });
      } else {
        let availableSeats = event.max_seats;
        const newBooking = new Booking(data);
        await newBooking.save();

        res.send({
          status: true,
          result: "Saved new Booking",
        });
      }
    } catch (error) {
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  });

module.exports = router;
