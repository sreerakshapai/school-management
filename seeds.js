var mongoose = require ("mongoose");
var student = require("./models/stud");


 student.remove({}, function(err){
     if(err){
         console.log(err);
     }
     console.log("removed student info");
 })