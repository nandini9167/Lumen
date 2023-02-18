const dotenv = require("dotenv");
dotenv.config();
const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const eventsRouter = require("./services/events");
const bookingsRouter = require("./services/bookings");

app.use(cors());

app.use("/events", eventsRouter);
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
