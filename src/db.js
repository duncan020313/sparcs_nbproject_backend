const roomModel = require("./models/room")
const userModel = require("./models/user")

function addRoom(roomName, maxPeople, restaurant, userId, callback){
    const newRoom = new roomModel({
        roomName: roomName,
        maxPeople: maxPeople,
        roomjoinedPeople: [userId],
        restaurant: restaurant,
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

function getRoominfoWithUserID(userId, callback){
    roomModel.find({roomjoinedPeople:userId}, (error, result)=>{
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
    roomModel.deleteOne({"_id":id}, (error)=>{
        callback();
    })
}

function removeUserinRoom(userId, roomId, numOfpeople, callback){
    roomModel.updateOne({_id:roomId}, {
        $pull : {roomjoinedPeople:userId},
        $set : {roomNumberofPeople: numOfpeople}
    }, (error)=>{
        callback();
    })
}

function addUserinRoom(userId, roomId, numOfpeople, callback){
    roomModel.updateOne({_id:roomId}, {
        $push : {roomjoinedPeople:userId},
        $set : {roomNumberofPeople: numOfpeople}
    }, (error)=>{
        callback();
    })
}

function removeUser(callback){
    userModel.deleteOne({_id:id}, (error)=>{
        callback();
    })
}

function login(id, password, callback){
    userModel.find({userId:id, userPassword:password}, (error, result)=>{
        console.log(result)
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
    getRoominfoWithUserID,
    getUserinfo,
    removeRoom,
    removeUserinRoom,
    addUserinRoom,
    removeUser,
    login,
};