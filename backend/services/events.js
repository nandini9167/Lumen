const router = require("express").Router();
const Event = require("../schemas/Event.model");

router
  // Defining route `/events/`
  .route("/")
  // GET Request handler on route `/events/`
  .get(async (req, res) => {
    try {
      const allEvents = await Event.find({}, { _id: 0 });
      res.send({
        status: true,
        result: allEvents,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  })
  // POST Request handler on route `/events/`
  .post(async (req, res) => {
    try {
      const data = req.body.data;
      const newEvent = new Event(data);

      await newEvent.save();

      res.send({
        status: true,
        result: "Saved new Event",
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: false,
        error: error.message,
      });
    }
  });

module.exports = router;
