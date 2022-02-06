# Overview
This project for Notable's Take Home Assignment is built with Express and Node.js for the server, and a Postgres database.

# GET Request: Retrieve List of All Doctors
Send a GET request to /doctors to receive an array of doctor objects stored in the database table "doctors."

# GET Request: Retrieve List of All Appointments from a Single Doctor
This route sends back appointments based on doctorID and day (for example: "Sun Feb 06 2022") sent as params through the /appointments endpoint.

# DELETE Request:
User can delete an appointment through the /appointments endpoint as long as they have their unique appointmentID sent in the request params.

# POST Request:
This route allows the user to set an appointment through the /appointments endpoint. The request body must contain patientFirstName, patientLastName, date, time, kind, and doctorID.

## Available Scripts

In the project directory, you can run:

### `npm start`

The project can be viewed on localhost:3007/