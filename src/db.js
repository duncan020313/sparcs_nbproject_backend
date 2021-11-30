const roomModel = require("./models/room")
const userModel = require("./models/user")

function addRoom(name, maxPeople, callback){
    const newRoom = new roomModel({
        name: `${name}`,
        roomMax: maxPeople
    })
    newRoom.save((error, result)=>{
        callback(result)
    })
}

function addUser(name, address, account, callback){
    const newRoom = new userModel({
        userName: name,
        userAddress: address,
        userAccount: account
    })
    newRoom.save((error, result)=>{
        callback(result)
    })
}

function getRoominfo(callback){
    roomModel.find({}, (error, result)=>{
        if(error){
        console.log(error);
        callback([]);
        }
        else {
        callback(result);
        }
    })
}

function getUserinfo(callback){
    userModel.find({}, (error, result)=>{
        if(error){
        console.log(error);
        callback([]);
        }
        else {
        callback(result);
        }
    })
}

module.exports = {
    addRoom,
    addUser,
    getRoominfo,
    getUserinfo,
};