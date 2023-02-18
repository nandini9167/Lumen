// Read the DATABASE_LINK from .env file using dotenv library
const dotenv = require("dotenv");
dotenv.config();

// Create a new express app using express library
const app = require("express")();

// Import mongoose library to connect to the database
const mongoose = require("mongoose");
// Import CORS library to allow server to be access from anywhere
const cors = require("cors");

// Import Event and Booking router from their respective files in /services folder
const eventsRouter = require("./services/events");
const bookingsRouter = require("./services/bookings");

// Use CORS library to enable CORS (allow server to be accessed from any ip address)
app.use(cors());

// Use event router with the base url /events, all routes from event router will be prefixed with /events
app.use("/events", eventsRouter);
// Use booking router with the base url /bookings, all routes from booking router will be prefixed with /bookings
app.use("/bookings", bookingsRouter);

// Connect to mongodb using mongoose orm
mongoose
  .connect(process.env.DATABASE_LINK, { useNewUrlParser: true })
  // After successfull connectino start the server on port 5000
  .then((connection) => {
    console.clear();
    console.log("Connected To Datase...");
    app.listen(5000, (error) => {
      if (error) console.log(error);
      else console.log("Server running on port 5000...");
    });
  })
  .catch((error) => console.log(error));
