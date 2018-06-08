var student = require("../models/stud");

// all the middleWare goes here
var middlewareObj = {};

middlewareObj.checkStudentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        student.findById(req.params.id, function(err, foundstudents){
           if(err){
               
               res.redirect("back");
           }  else {
               // does user own the student ?
               if(foundCampground.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");

        res.redirect("back");
    }
}



middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");

    res.redirect("/login");
}

module.exports = middlewareObj;
