var dbConnect = require('../Models/model');

module.exports={
// Courses Part : ******************************************************* //
    getAllCourses:function(req, res) {
        dbConnect.query(`SELECT * FROM ittrain.courses`, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
            console.log(result);
        })
    },
    getCourseId:function(req, res) {
        dbConnect.query(`SELECT * FROM ittrain.courses where idCourse = ?`,[req.params.id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
            console.log(result);
        })
    },
    addNewCourse:function(req, res) {
        dbConnect.query(`INSERT INTO ittrain.courses (idCourse,name,detail) VALUES(40,'BigData','Big Data application based on Hadoop Architecture HDFS and MapReduce')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send('Successfully to add New Course --- post Method! ');
        })
    },
    delCourseId:function(req, res) {
        dbConnect.query(`DELETE FROM ittrain.courses WHERE idCourse = ?`,[req.params.id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send('Successfully to Delete Course --- delete Method! ');
        })
    },

// Students Part : ******************************************************* //
    getAllStudent:function(req, res) {
        dbConnect.query(`SELECT * FROM ittrain.student`, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
            console.log(result);
        })
    },
    getStudentId:function(req, res) {
        dbConnect.query(`SELECT * FROM ittrain.student where idStudent = ?`,[req.params.id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
            console.log(result);
        })
    },

    addNewStudent:function(req, res) {
        dbConnect.query(`INSERT INTO ittrain.student (idStudent, fullName, email, phone) VALUES(7,'MOHAMED Hamdi','hamdi@gmail.com','21642589654')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send('Successfully to add New student --- post Method! ');
        })
    },
    
    delStudentId:function(req, res) {
        dbConnect.query(`DELETE FROM ittrain.student WHERE idStudent = ?`,[req.params.id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send('Successfully to Delete student --- delete Method! ');
        })
    },


    inserting:function(req, res) {
        dbConnect.query(`INSERT INTO ittrain.text (msg) VALUES('computer')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(' Successfully to inserting information in table ');
            console.log('****************** Successfully to inserting ******************');
        })
    }
    




}
