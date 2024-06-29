const { booksSchema } = require("../models");



let addbook = (body) => {
    console.log(body);
    return booksSchema.create(body);
}

let findname = (name) => {
    console.log("🚀 ~ findname ~ bookname:", name)
    return booksSchema.findOne({ name })
}

let getbook = () => {
    return booksSchema.find();
}

let deletebook = (id) => {
    return booksSchema.findByIdAndDelete(id);
}

let updatebook = (id, body) => {
    return booksSchema.findByIdAndUpdate(id, body)
}




module.exports = { addbook, findname, getbook, deletebook, updatebook }