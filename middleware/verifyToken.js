// 1 check if token 
// 2 if not token send res
// 3 decoded the token
// 4 if valid next
const jwt = require("jsonwebtoken");
const {promisify} = require("util")

module .exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        // console.log("token",token)
        if(!token){
            return res.status(401).json({
                status : "fail",
                error :"you are not login",
            })
        }
        const decoded = await promisify(jwt.verify)(token, "221988ea2d8d1d29ddd7922f45f660f1e7de951c959967bcdc5c0ef0542d2fabc7230fc1ae3fb92243f9b33de15dd04818a4481198126a3a0f478923253745f1",)
        
        
        
        req.user = decoded;
        next();

    } catch (error) {
        res.status(403).json({
            status : "fail",
            error: "Invalid Token"
        })
    }
}