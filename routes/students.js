var express = require("express");
var router = express.Router();
var student = require("../models/stud");


// INDEX -show all student details
router.get("/", function (req, res) {

    // get all student from db

    student.find({}, function (err, allStudents) {
        if (err) {
            console.log(err);
        } else {
            res.render("students", {
                students: allStudents
            });
        }

    });


});
// CREATE -add new  student info to db
router.post("/", function (
    req, res) {

    // get data from form and add to students array
    var name = req.body.name;
    var batch = req.body.batch;
    var group = req.body.group;
    var m1 = req.body.m1;
    var m2 = req.body.m2;
    var m3 = req.body.m3;
    var m4 = req.body.m4;
    var newStudent = {
        name: name,
        batch: batch,
        group: group,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4
    }

    // Create a new student detail and save to database

    student.create(newStudent, function (err, Newlycreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to students
            res.redirect("/students");
        }

    });

});



// new
router.get("/new",function (req, res) {
    res.render("students/new");
})


// show
router.get("/:id",function (req, res) {
    //find the student with provided ID
    student.findById(req.params.id, function (err, foundStudents) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that student
            res.render("views/show", {
                student: foundStudents });
        }
    });
});
// edit student route
router.get("/:id/edit", function(req,res){
    res.send("/edit");
});
// update student route




    module.exports = router;
