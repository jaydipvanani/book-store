const { userSchema } = require("../models");

let register = (body) => {
    console.log(body);
    return userSchema.create(body)
}

let getuser = () => {
    return userSchema.find();

}

let deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updateuser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

let userlogin = (email) => {
    return userSchema.findOne({ email });
}

let findname = (email) => {
    return userSchema.findOne({ email })
}

module.exports = { register, getuser, deleteuser, updateuser, findname, userlogin }

