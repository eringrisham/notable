const router = require('express').Router();

//destructure controller functions
const { getDoctors } = require('../controllers');

//add in controller functions as second args
router.get('/doctors', getDoctors);
// router.post('/', __________);
// router.put('/', __________);
// router.delete('/', __________);

module.exports = router;