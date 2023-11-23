const express = require('express');
const { createStudent, getAllStudents, updateStudent } = require('../controllers/studentController');
const router = express.Router()

router.post('/createstudent',createStudent);
router.get('/getallstudent',getAllStudents);
router.put('/updatestudent/:id',updateStudent);

module.exports = router