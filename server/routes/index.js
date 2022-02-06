const router = require('express').Router();
const { getDoctors, getAppointments, deleteAppointment, postAppointment } = require('../controllers');

router.get('/doctors', getDoctors);
router.get('/appointments', getAppointments);
router.delete('/appointments', deleteAppointment);
router.post('/appointments', postAppointment);

module.exports = router;
