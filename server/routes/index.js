const express = require('express');
const router = express.Router();
const chirpsRouter = require('./chirps');

//localhost: 3000/api/chirps
router.use('/chirps', chirpsRouter);

// define the about route
// router.get('/about', (req, res) => {
// 	res.send('About birds');
// });

module.exports = router;
