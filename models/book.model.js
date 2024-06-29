const { date } = require("joi");
let mongoose = require("mongoose");


let bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    authorname: {
        type: String,
        required: true,
    },

},
    // { timestamps: true }
)


let book = mongoose.model("bookSchema", bookSchema);

module.exports = book
