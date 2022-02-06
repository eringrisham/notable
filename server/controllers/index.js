//destructure models
const { getAllDoctors } = require('../../database/models');

//controllers take in req and res
const controllers = {
  getDoctors: (req, res) => {

		getAllDoctors()
		.then(doctorData => res.send(doctorData))
		.catch(err => console.log(`Error retrieving doctors in controller: `, err));
	}
}


module.exports = controllers;