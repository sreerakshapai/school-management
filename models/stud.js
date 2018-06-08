
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
    grade:String ,
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        username: String
     },
})
module.exports = mongoose.model("stud", studentSchema);