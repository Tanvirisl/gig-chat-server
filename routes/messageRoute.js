const express = require("express");
const { postMessage, getMessage, updateMessage } = require("../controller/messageControler");
const route = express.Router();

route.post("/postMessage",postMessage)
route.get("/getMessage/:friendId/:myId",getMessage)
route.put("/updateMessage",updateMessage)
module.exports  = route;