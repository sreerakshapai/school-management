var express     = require("express"),
     app        = express(),
    bodyParser  = require("body-parser"),
     mongoose   = require("mongoose")

     mongoose.connect("mongodb://localhost/my_database");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


// SCHEMA SETUP


var students = [
    {name: "riya sharma",batch: "12", group: "science"},
    {name: "siya sharma",batch: "12", group: "commerce"},
    {name: "priya sharma",batch: "12", group: "science"}

];
app.get("/", function(req , res){
        res.render("home");
}); 

app.get("/students", function(req,res){

        res.render("students",{students:students});
});


app.post("/students",function(req, res){
       
    // get data from form and add to students array

   var name = req.body.name;
    var batch = req.body.batch;
 var group =  req.body.group;
 var newStudent = {name:name, batch:batch, group:group}
 students.push(newStudent);

    // redirect back to students
    res.redirect("/students");

});

app.get("/students/new", function(req,res){
    res.render("new.ejs");
})
app.listen(3000, function(){
    console.log("server started")
})