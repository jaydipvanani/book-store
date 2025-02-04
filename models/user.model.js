const { required } = require("joi");
let mongoose = require("mongoose");
const otp = require("../mail/mailtemplate");

let userSchema = new mongoose.Schema({
    email: {
        // type: String,
        // required:true,
    },
    password: {
        // type: String,
        // required:true,
    },
 
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

let user = mongoose.model("userSchema", userSchema);
module.exports = user;