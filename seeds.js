var mongoose = require ("mongoose");
var student = require("./models/stud");

function seedDB(){
    // remove all student info
    student.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed student info");
    });
    


}

 module.exports = seedDB;