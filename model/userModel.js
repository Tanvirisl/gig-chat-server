const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require : [true, "please provide your name"],
            unique:[true, "name already has been used"],
        },
        email: {
            type: String,
            validate: [validator.isEmail, "please provide a valid email"],
            unique:[true, "email already has been used"],
            trim: true,
            require: true,
        },
        password: {
            type: String,
            require: [true, "Email address is require"],
            // validate: {
            //     validator: (value) =>
            //         validator.isStrongPassword(value, {
            //             minLength: 6,
            //         }),

            //     message : "password{value} is not strong enough"

            // }

        },
        confirmPassword: {
            type: String,
            require: [true, 'please confirm your password'],
            // validate:{
            //     validator : function(value){
            //         return value === this.password;
            //     },
            //     message : "password don't match"
            // }
        },
        image:{
            type : String,
        }
    }
)

userSchema.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)
        this.confirmPassword = undefined                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
})

// userSchema.methods.comparePassword = function(password, hash){
//     const isPasswordValid = bcrypt.compareSync(password, hash);
//     return isPasswordValid;
// }

const CreateUser = mongoose.model("CreateUser",userSchema)



module.exports = CreateUser;