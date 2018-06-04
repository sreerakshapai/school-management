
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
student = require("./models/stud"),
User = require("./models/user"),
seedDB = require("./seeds"),
passport = require("passport"),
localStrategy = require("passport-local")




var mongoose = require("mongoose");
var mongoDB = 'mongodb://rakshavibs:vibs2018@ds141870.mlab.com:41870/schoolapp';
mongoose.connect(mongoDB);

seedDB();

app.use(bodyParser.urlencoded({
extended: true
}));
app.set("view engine", "ejs");

app.use(express.static('public'))



// PASSPORT CONFIG

app.use(require("express-session")({
secret: "hello",
resave: false,
saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function (req, res) {
res.render("home");
});
// INDEX -show all student details
app.get("/students", function (req, res) {

// get all campgrounds from db
student.find({}, function (err, allStudents) {
    if (err) {
        console.log(err);
    } else {
        res.render("students", {
            students: allStudents, currentUser: req.user
        });
    }
})


});

// CREATE -add new student info
app.post("/students", function (
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
app.get("/students/new", function (req, res) {
res.render("new.ejs");
})


// show
app.get("/students/:id", function (req, res) {
//find the student with provided ID
student.findById(req.params.id, function (err, allStudents) {
    if (err) {
        console.log(err);
    } else {
        //render show template with that campground
        res.render("show", {
            student: allStudents
        });
    }
});
});

// ==============================================
//          AUTH ROUTES
// ==============================================

// SHOW REGISTER FORMS

app.get("/register", function(req,res){
    res.render("register")
});

//handle sign up logic
app.post("/register", function(req, res){
var newUser = new User({username: req.body.username});
User.register(newUser, req.body.password, function(err, user){
    if(err){
        console.log(err);
        return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
       res.redirect("/students"); 
    });
});
});

// show login form
app.get("/login", function(req, res){
res.render("login"); 
});
// handling login logic
app.post("/login", passport.authenticate("local", 
 {
     successRedirect: "/students",
     failureRedirect: "/login"
 }), function(req, res){
});

// logic route
app.get("/logout", function(req, res){
req.logout();
res.redirect("/students");
});


function isLoggedIn(req, res, next){
if(req.isAuthenticated()){
    return next();
}
res.redirect("/login");
}




app.get
app.listen(3000, function (err) {
if (err) {
    console.log("Server in Use")
}
console.log("Server started")
})
