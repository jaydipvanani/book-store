const { orderServices, userServices } = require("../services")


let addorder = async (req, res) => {
    try {
        let body = req.body
        console.log("🚀 ~ addorder ~ body:", body)

        let result = await orderServices.addorder(body)

        if (!result) {
            throw new Error(`something went wrong`)
        } else {
            res.status(201).json({
                message: "add order success",
                result: result
            })

        }

    } catch (error) {
        res.status(500).json({
            message: error.message

        })
    }
}

let getorder = async (req, res) => {
    try {
        let result = await orderServices.getorder()
        if (!result) {
            throw new Error("something went wrong");
        } else {
            res.status(200).json({
                message: "order get success",
                result: result
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { addorder, getorder }