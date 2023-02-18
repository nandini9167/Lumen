## Requirements to run backend

-> nodejs must be installed

## Steps to run backend

-> Open terminal in project folder
-> Go to backend folder. `cd backend`
-> Run the command `npm install` to install the required libraries for backend
-> Run the command `npm start` to start the server
-> The server will start and can be used on port 5000 (Complete URL - http://localhost:5000)

## Services Present in backend

-> GET /events (Full URL - http://localhost:5000/events)
To fetch all events from the database
Returns an object with the following fields
`status` - Boolean value stating whether the request was successful or not
`error` - Error message String if the request was not successful
`result` - Result data (Events array) of the request if the reqeust was successful
Sample Request in JavaScript
fetch("http://localhost:5000/events",{method:'GET'})
.then(response => response.json())
.then(data => {
// Use the data here
console.log(data)
})

-> GET /bookings (Full URL - http://localhost:5000/bookings)
To fetch all bookings from the database
Returns an object with the following fields
`status` - Boolean value stating whether the request was successful or not
`error` - Error message String if the request was not successful
`result` - Result data (Bookings array) of the request if the reqeust was successful
Sample Request in JavaScript
fetch("http://localhost:5000/bookings",{method:'GET'})
.then(response => response.json())
.then(data => {
// Use the data here
console.log(data)
})

-> POST /events (Full URL - http://localhost:5000/events)
To add new event to database
Returns an object with the following fields
`status` - Boolean value stating whether the request was successful or not
`error` - Error message String if the request was not successful
`result` - Result message String if the reqeust was successful
Sample Request in JavaScript
fetch("http://localhost:5000/events",{
method:'POST',
body: JSON.stringify({
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
})
})
.then(response => response.json())
.then(data => {
// Use the data here
console.log(data)
})

-> POST /bookings (Full URL - http://localhost:5000/bookings)
To add new booking to database
Returns an object with the following fields
`status` - Boolean value stating whether the request was successful or not
`error` - Error message String if the request was not successful
`result` - Result message String if the reqeust was successful
Sample Request in JavaScript
fetch("http://localhost:5000/bookings",{
method:'POST',
body: JSON.stringify({
booking_id: Number,
event_id: Number,
participant_name: String,
participant_email: String,
participant_phone: String,
})
})
.then(response => response.json())
.then(data => {
// Use the data here
console.log(data)
})

-> POST /event/status (Full URL - http://localhost:5000/bookings/status)
To update the status of an event
Returns an object with the following fields
`status` - Boolean value stating whether the request was successful or not
`error` - Error message String if the request was not successful
`result` - Result message String if the reqeust was successful
Sample Request in JavaScript
fetch("http://localhost:5000/events/status",{
method:'POST',
body: JSON.stringify({
event_id: Number,
event_status: String
})
})
.then(response => response.json())
.then(data => {
// Use the data here
console.log(data)
})
