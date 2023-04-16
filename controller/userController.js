const { signupService, findUserByEmail, getUserById } = require("../services/user.services")
const { generateToken } = require("../utils/token");
const bcrypt = require("bcrypt");
const CreateUser = require("../model/userModel");

exports.signup = async (req, res) => {
    try {
        const user = await signupService(req.body);

        res.status(200).json({
            status: "success",
            message: "successfully signed up"
        })

    }
    catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }


}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await CreateUser.findOne({ email })

        if (!email || !password) {
            return res.status(401).json({
                status: "fail",
                error: "please enter your valid email & password"
            })
        }

        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "no user found . please create a account"
            })
        }

        const PasswordValidator = await bcrypt.compare(password, user.password)
        if (!PasswordValidator) {
            res.status(401).json({
                status: "fail",
                error: "password & email is not correct"
            })
        }

        const token = generateToken(user);


        res.status(200).json({
            status: "success",
            message: "successfully login",
            data: {
                user,
                token
            }
        })

    }
    catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }

}
module.exports.findUser = async (req, res) => {
    try {
        const user = await CreateUser.find({});
        res.status(200).json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }

}
module.exports.getMe = async (req, res) => {
    try {
        const user = await findUserByEmail(req.user?.email)
        res.status(200).json({
            status: "success",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }

}

module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const getId = await getUserById(id)
        res.status(200).json({
            status: "success",
            data: getId,
        })

    } catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }
}


