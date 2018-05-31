var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")



mongoose.connect("mongodb://localhost/stud_db");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");


// SCHEMA SETUP
var studentSchema = new mongoose.Schema({
        name:String,
        batch:String,
        group:String
})
var student = mongoose.model("student",studentSchema);` `

// student.create(
//     {
//         name: "Ria sharma",
//         batch: "12",
//         group: "commerce"
//     }, function(err , student){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly Added Student Detail");
//             console.log(student);
//         }
//     });


var students = [{
        name: "riya sharma",
        batch: "12",
        group: "science"
    },
    {
        name: "siya sharma",
        batch: "12",
        group: "commerce"
    },
    {
        name: "priya sharma",
        batch: "12",
        group: "science"
    }

];
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/students", function (req, res) {
    // get all campgrounds from db
    student.find({}, function(err,allStudents){
        if(err){
            console.log(err);
        }else{
            res.render("students", {
                students: allStudents
            });
        }
    })

  
});


app.post("/students", function (req, res) {

    // get data from form and add to students array

    var name = req.body.name;
    var batch = req.body.batch;
    var group = req.body.group;
    var newStudent = {
        name: name,
        batch: batch,
        group: group
    }
    // Create a new student detail and save to database
    // redirect back to students
    res.redirect("/students");

});

app.get("/students/new", function (req, res) {
    res.render("new.ejs");
})
app.listen(3000, function () {
    console.log("server started")
})