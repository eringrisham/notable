const db = require('../');

const models = {
  getAllDoctors: () => {
		const queryString = `SELECT * FROM doctors ORDER BY last_name DESC`;

		return db.query(queryString)
		.then(res => res.rows)
		.catch(err => console.log(`Error retrieving all doctors: `, err));
	}
}

module.exports = models;