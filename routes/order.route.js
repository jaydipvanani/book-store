let express = require("express");
const { orderController } = require("../controller");
let route  = express.Router();


route.post("/addorder",orderController.addorder )
route.get("/getorder", orderController.getorder )
route.delete("/deleteorder/:id" , )


module.exports = route