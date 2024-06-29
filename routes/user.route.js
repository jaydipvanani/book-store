let express = require("express");
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const { userValidation } = require("../validation");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/register", validate(userValidation.user), userController.register)


route.get("/getuser",
    isLogin,
    isRestrict(["admin"]),
    userController.getAllusers)

route.delete("/deleteuser/:id",isLogin, userController.deleteuser)
route.put("/updateuser/:id",isLogin, userController.updateuser)
route.post("/login", validate(userValidation.user), userController.userlogin)
route.get("/profile", isLogin, isRestrict(["admin","user"]),userController.getprofile);

module.exports = route


