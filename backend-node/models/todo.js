
const mongoose = require("mongoose");
const todoschema = new mongoose.Schema({
    activity: {type:String, required:true},
    status:{type:String, required:true},
    pending:{type:String,required:true},
    action:{type:String,required:true}
})
module.exports = mongoose.model("todo",todoschema)