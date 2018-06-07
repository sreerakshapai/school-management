
var mongoose =  require("mongoose");

var studentSchema = new mongoose.Schema({
    name: String,
    batch: String,
    group: String,
    m1:Number,
    m2:Number,
    m3:Number,
    m4:Number,
    total:Number,
    avg:Number,
    result:String,
    grade:String
})
module.exports = mongoose.model("student", studentSchema);