let express = require("express");
const { userController, bookController } = require("../controller");
const { upload } = require("../middleware/multer");
let route = express.Router();

route.post("/addbook",upload.single("image") ,bookController.addbook )
route.get("/getbook",bookController.getbook )
route.delete("/deletebook/:id" ,bookController.deletebook )
route.put("/updatebook/:id" ,bookController.updatebook )

module.exports = route