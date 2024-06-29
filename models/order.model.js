let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    bookName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookSchema",
    },
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
},
    { timestamps: true }
);

let order = mongoose.model("orderSchema", orderSchema);
module.exports = order; 