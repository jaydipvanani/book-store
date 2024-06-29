
const formate = require("../mail/mailtemplate");
const { createtoken } = require("../middleware/auth");
const { userServices } = require("../services");
const sendEmail = require("../services/email.services");

let generateotp = () => {
    let number = '';
    for (let i = 0; i < 4; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number; // Ensure the function returns the generated OTP
}

let register = async (req, res) => {
    try {

        console.log(req);

        let body = req.body
        let email = body.email
        let duplicate = await userServices.findname(email);
        if (duplicate) {

            throw new Error(`${duplicate.email}"this  user alredy exist"`)

        }


        let userdata = await userServices.register(body);


        //      email service

        if (userdata) {
            let result = await sendEmail(
                userdata.email,
                "your register success",
                `welcome ${formate}
                 ${userdata.email}`
            );
            console.log(result);
        }

        

        // console.log(user, "res");


        res.status(201).json({
            message: "user create successfully",
            result: userdata,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}



let getAllusers = async (req, res) => {
    try {
        let users = await userServices.getuser();

        res.status(200).json({
            message: "get all user success",
            result: users,
        });
    } catch (error) {
        res.status(404).json({
            message: "network error"
        })
    }
};

let deleteuser = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);

        let userdaletedata = await userServices.deleteuser(id);

        console.log(userdaletedata);


        res.status(200).json({
            message: "user deleted success",
            result: userdaletedata
        });

    } catch (error) {
        res.status(404).json({
            message: "something went wrong",
        });
    }
}

let updateuser = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);
        let body = req.body
        let userupdatedata = await userServices.updateuser(id, body);
        res.status(201).json({
            message: "update user successfully",
            result: req.body,
            prevdata: userupdatedata

        })
    } catch (error) {
        res.status(501).json({
            message: `something went wrong ${error.message}`
        })

    }
}



let userlogin = async (req, res) => {

    
    try {


        let { email, password, role } = req.body


        let user = await userServices.userlogin(email)


        if (!user) {
            throw new Error("user not found");
        }


        if (user.password !== password) {
            throw new Error("invalid password");
        }

        if (user) {
            // Generate a new OTP for each registration
            let otp = `this is otp ${generateotp()}`;

            let result = await sendEmail(
                user.email,
                "Your registration was successful",
                `Welcome !
                 ${otp}
                 ${user.email}`
            );
            console.log(result);
        }

        let token = createtoken({user});
        console.log("🚀 ~ userlogin ~ token:", token)

        res.cookie("token",token)


        

        res.status(201).json({
            message: "user login success",
            // user: user
        })


    }
    
    
    catch (error) {
        res.status(500).json({
            message: error.message,
        });

    }
}


let getprofile = async (req, res) => {
    try {
        let user = req.user;
        res.status(200).json({
            message: "profile get success",
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



module.exports = { register, getAllusers, deleteuser, updateuser, userlogin, getprofile }