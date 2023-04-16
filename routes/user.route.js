const express = require("express");
const { signup, login, findUser, getMe ,getById} = require("../controller/userController");
const verifyToken = require("../middleware/verifyToken");
const route = express.Router();

route.post("/signupUser" , signup);
route.post("/loginUser" ,login);
route.get("/getUser" , findUser);
route.get("/getMe" ,verifyToken, getMe);
route.get("/userId/:id" , getById);

module.exports  = route;