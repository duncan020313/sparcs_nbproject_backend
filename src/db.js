const roomModel = require("./models/room")
const userModel = require("./models/user")

function addRoom(roomName, maxPeople, callback){
    const newRoom = new roomModel({
        roomName: roomName,
        roomMax: maxPeople
    })
    newRoom.save((error, result)=>{
        callback(result)
    })
}

function addUser(id, password, name, address, account, callback){
    const newRoom = new userModel({
        userId: id,
        userPassword: password,
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

function removeRoom(id, callback){
    roomModel.deleteOne({_id:id}, (error)=>{
        callback();
    })
}

function removeUser(callback){
    userModel.deleteOne({_id:id}, (error)=>{
        callback();
    })
}

function login(id, password, callback){
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
    removeRoom,
    removeUser,
    login,
};