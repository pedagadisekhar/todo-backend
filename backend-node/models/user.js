const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    //confirmpassword:{type:String}
});

module.exports = mongoose.model("user", userSchema);