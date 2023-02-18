const router = require("express").Router();
const Event = require("../schemas/Event.model");

// Defining route `/events/`
router
  .route("/")
  // GET Request handler on route `/events/` to get all events from database
  .get(async (req, res) => {
    try {
      // Fetch all events
      const allEvents = await Event.find({}, { _id: 0 });

      // Send status true with all events to frontend
      res.send({
        status: true,
        result: allEvents,
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
  // POST Request handler on route `/events/` to add a new event to database
  .post(async (req, res) => {
    try {
      // Extract the data from request body
      const data = req.body;

      // Create a new event and save it to database
      const newEvent = new Event(data);
      await newEvent.save();

      // Send status true with result message to the frontend
      res.send({
        status: true,
        result: "Saved new Event",
      });
    } catch (error) {
      // If there is any error, print it and send status false with error message to frontend
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  });

router.route("/status").post(async (req, res) => {
  try {
    // Extract event_id and event_status from request body
    const { event_id, event_status } = req.body;

    // Update the event_status field of the event with particualt event_id
    await Event.updateOne({ event_id }, { event_status });

    // Send status true with result message to frontend
    res.send({
      status: true,
      result: "Updated Event Status",
    });
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
