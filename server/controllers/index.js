//destructure models
const { getAllDoctors, getAllAppointments, deleteAppointmentModel, addAppointment } = require('../../database/models');

//controllers take in req and res
const controllers = {
  getDoctors: (req, res) => {

		getAllDoctors()
		.then(doctorData => res.send(doctorData))
		.catch(err => console.log(`Error retrieving doctors in controller: `, err));
	},

	getAppointments: (req, res) => {
		const doctorID = req.query.doctorID;
		const day = req.query.day;

		getAllAppointments(doctorID, day)
		.then(appointmentData => res.json(appointmentData).status(200))
		.catch(err => console.log(`Error retrieving appointments in controller: `, err));
	},

	deleteAppointment: (req, res) => {
		const appointmentID = req.query.appointmentID;

		deleteAppointmentModel(appointmentID)
		.then(appointmentData => res.sendStatus(200))
		.catch(err => console.log(`Failed to delete appointment with ID of: `, appointmentID, err));
	},

	postAppointment: (req, res) => {

		//need some kind of logic here to validate time (15-minute increments)
		//would prefer to implement that on the front-end if given the option/more time

		const appointmentObj = {
			patientFirstName: req.body.patientFirstName,
			patientLastName: req.body.patientLastName,
			date: req.body.date,
			time: req.body.time,
			kind: req.body.kind,
			doctorID: req.body.doctorID
		}

		addAppointment(appointmentObj)
		.then(appointmentData => res.sendStatus(201))
		.catch(err => console.log(`Error adding appointment: `, err));
	}
}

module.exports = controllers;