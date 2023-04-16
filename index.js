const express = require("express");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
const signupRoute = require('./routes/user.route.js')
const messageRoute = require('./routes/messageRoute.js')



mongoose.connect("mongodb://localhost:27017/gig-chat").then(() => {
    console.log("database connect successful")
})


app.use("/", signupRoute)
app.use("/", messageRoute)

const run = async () => {
   
}


run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("server running")
})

app.listen(port, () => {
    console.log(`simple node server running${port}`);
})