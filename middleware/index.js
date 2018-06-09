var student = require("../models/stud");

// all the middleWare goes here
var middlewareObj = {};

middlewareObj.checkStudentOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        student.findById(req.params.id, function (err, foundStudents) {
            if (err) {
                req.flash("error", "Student not found");

                res.redirect("back");
            } else {
                // does user own the student ?
             
                
                if (foundStudents.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");

                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");

        res.redirect("back");
    }
}



middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that");

    res.redirect("/login");
}

module.exports = middlewareObj;