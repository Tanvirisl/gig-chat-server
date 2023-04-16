const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        senderId : {
            type: String,
            // require : true
        },
        senderName :{
            type : String,
            // require : true
        },
        
        receiverId : {
            type : String,
            // require : true
        },
        message : {
            type : String
        },
        status :{
            type : String,
            default : "unseen"
        }
    },
    {timestamps : true}
)
const Message = mongoose.model("Message",messageSchema);

module.exports = Message;