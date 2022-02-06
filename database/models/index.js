const db = require('../');

const models = {
  getAllDoctors: () => {
		const queryString = `SELECT * FROM doctors ORDER BY last_name ASC`;

		return db.query(queryString)
		.then(res => res.rows)
		.catch(err => console.log(`Error retrieving all doctors in model: `, err));
	},

	getAllAppointments: (doctorID, day) => {

		const queryString = `SELECT * FROM appointments WHERE doctor_id=${doctorID} AND date=${day}`;

		return db.query(queryString)
		.then(res => res.rows)
		.catch(err => console.log(`Error retrieving appointments in model: `, err));
	},

	deleteAppointmentModel: (appointmentID) => {
		const queryString = `DELETE FROM appointments WHERE id=${appointmentID}`;

		return db.query(queryString)
		.then(res => console.log(`Appointment deleted!`))
		.catch(err => console.log(`Error deleting appointment in model: `, err));
	},

	addAppointment: (appointmentObj) => {
		const { patientFirstName, patientLastName, date, time, kind, doctorID } = appointmentObj;

		console.log('***************', appointmentObj);
		const queryString = `INSERT INTO appointments (patient_first_name, patient_last_name, date, time, kind, doctor_id) VALUES (${patientFirstName}, ${patientLastName}, ${date}, ${time}, ${kind}, (SELECT id FROM doctors WHERE id=${doctorID}));`;

		return db.query(queryString)
		.then(res => console.log(`Appointment added!`))
		.catch(err => console.log(`Error adding appointment in model: `, err));
	}
}

module.exports = models;