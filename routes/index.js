let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let bookRoute = require("./book.route");
let orderRoute = require("./order.route");
const { isLogin } = require("../middleware/auth");


routes.use("/user", userRoute);
routes.use("/book",
    //isLogin,
     bookRoute);
routes.use("/order",
    //isLogin,
     orderRoute);

module.exports = routes