const jwt = require("jsonwebtoken")

exports.generateToken = (userInfo) =>{
    const payload = {
        email : userInfo.email
    }
    const token = jwt.sign(payload, "221988ea2d8d1d29ddd7922f45f660f1e7de951c959967bcdc5c0ef0542d2fabc7230fc1ae3fb92243f9b33de15dd04818a4481198126a3a0f478923253745f1",{
        expiresIn : "7days"
    })
    
    return token;
}
