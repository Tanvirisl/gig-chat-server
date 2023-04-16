const Message = require("../model/messageModal")

module.exports.postMessage = async (req, res) => {
    try {

        const { senderId, senderName, receiverId, message, status } = req.body
        const textMessage = await Message.create({
            senderId: senderId,
            senderName: senderName,
            receiverId: receiverId,
            message: message,
            status: status
        })
        res.status(200).json({
            status: "success",
            data: textMessage
        })
    } catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }

}

module.exports.getMessage = async (req, res) => {
    const { friendId, myId } = req.params;
    try {
        const getAllMessage = await Message.find({});
        const friendMessage = getAllMessage.filter(m => m.senderId === myId && m.receiverId === friendId || m.receiverId === myId && m.senderId === friendId);

        res.status(200).json({
            status: "success",
            data: friendMessage
        })

    }
    catch (error) {
        res.status(500).json({
            status: 'status fail',
            error,
        })
    }
}

module.exports.updateMessage = async (req, res, next) => {
    try {

        const messageId = req.body;
        await Message.updateMany(messageId, { status: "seen" });
        res.status(200).json({
            status: "success",
            message: "message seen"
        })

    } catch (error) {
        res.status(500).json({
            status: 'status fail',
            message: "could't update message",
            error,
        })
    }
}