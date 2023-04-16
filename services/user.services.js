const { ObjectId } = require("mongodb");
const CreateUser = require("../model/userModel");
const Message = require("../model/messageModal");


exports.signupService = async (userInfo) => {
    const user = await CreateUser.create(userInfo);
    return user
};

exports.findUserByEmail = async(email) => {
    return await CreateUser.findOne({email})
    
}
exports.getUser = async () => {
    return await CreateUser.find({})    
}
exports.getUserById = async (id) => {
    return await CreateUser.find({_id : id})    
}

