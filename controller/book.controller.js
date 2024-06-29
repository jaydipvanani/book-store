const { bookServices } = require("../services");


let addbook = async (req, res) => {


    try {
        let body = req.body
        console.log("🚀 ~ addbook ~ body:", body)
        let name = body.name
        console.log("🚀 ~ addbook ~ task:", name)
        let file = req.file
        console.log("🚀 ~ addbook ~ file:", file)


      let   finaldata = {
            ...body,
            image: file.path
        }

        console.log(finaldata);

        let duplicate = await bookServices.findname(name);
        console.log("🚀 ~ addbook ~ duplicate:", duplicate)

        if (duplicate) {

            throw new Error(`${duplicate.name}"this book is already exist"`)

        }

        let result = await bookServices.addbook(finaldata);


        if (!result) {
            throw new Error("some thing went wrong")
        }

        res.status(201).json({
            message: "add book data succesfully",
            finaldata
            // result,
            // file,
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }

}

let getbook = async (req, res) => {
    try {
        let result = await bookServices.getbook();


        if (!result) {
            throw new Error("something went wrong");
        }
        else {
            res.status(200).json({
                message: "get book data succesfully",
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let deletebook = async (req, res) => {
    try {
        let { id } = req.params
        let result = await bookServices.deletebook(id);
        if (!result) {
            throw new Error("this book already deleted");
        } else {
            res.status(200).json({
                message: "book deleted successfully",
                result: result,

            })
        }
    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

let updatebook = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let result = await bookServices.updatebook(id, body)
        if (!result) {
            throw new Error("something went wrong");
        } else {
            res.status(201).json({
                message: "book update succesfully",
                prevsdata: result,
                result:req.body,
                
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = { addbook, getbook, deletebook, updatebook }