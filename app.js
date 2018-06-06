var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    student = require("./models/stud"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    passport = require("passport"),
    localStrategy = require("passport-local")


//requring routes
  var  studRoutes = require("./routes/candidate"),
    indexRoutes      = require("./routes/index")

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



app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", studRoutes);


app.listen(3000, function (err) {
    if (err) {
        console.log("Server in Use")
    }
    console.log("Server started")
});