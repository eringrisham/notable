const router = require('express').Router();

//destructure controller functions
const { getDoctors, getAppointments, deleteAppointment, postAppointment } = require('../controllers');

//add in controller functions as second args
router.get('/doctors', getDoctors);
router.get('/appointments', getAppointments);
router.delete('/appointments', deleteAppointment);
router.post('/appointments', postAppointment);

module.exports = router;