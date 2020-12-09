const express = require('express');
const router = express.Router();

var control = require('../Controllers/controller');

router.get   ('/Courses',        control.getAllCourses);
router.get   ('/Course/:id',     control.getCourseId);
router.post  ('/NewCourse',      control.addNewCourse);
router.delete('/delCourse/:id',  control.delCourseId);

router.get   ('/Student',         control.getAllStudent);
router.get   ('/Student/:id',     control.getStudentId);
router.post  ('/NewStudent',      control.addNewStudent);
router.delete('/delStudent/:id',  control.delStudentId);

// just for testing :
router.post  ('/inserting',      control.inserting);



module.exports = router;