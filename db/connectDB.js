let mongoose = require("mongoose");
db_url = "mongodb+srv://jaydip_53:12345@cluster0.hzuloup.mongodb.net/bookstore"


function connectDB() {
    mongoose
        .connect(db_url)
        .then(() => {
            console.log("Data base connect succesfully");
        })
        .catch((error) => {
            console.log("error is :", error);
        })
}


module.exports = connectDB;