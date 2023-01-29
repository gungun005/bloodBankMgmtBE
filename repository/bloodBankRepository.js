// if(process.env.NODE_ENV !== 'production'){
//     const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
// }
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { all } = require('../routes/bloodbank');
// const { resolve, reject } = require('promise');

const client = new MongoClient("mongodb+srv://bbsystem:bbsystem123456789@cluster0.2o8fidr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const addUser = async (body) => {
    console.log("repo ", body);
    client.connect();
    const bbCollection = client.db("bloodBankDB").collection("Users");
    const addUser = await bbCollection.insertOne(body);
    console.log(addUser);
    return addUser.acknowledged;
};

const deleteUser = async (body) => {
    client.connect();
    console.log(body);
    const bbCollection = client.db("bloodBankDB").collection("Users");
    const deleteUser = await bbCollection.deleteOne(body);
    console.log(deleteUser);
    return deleteUser.acknowledged;
};

const searchUser = async (body) => {
    let searchOptions = {};
    console.log(body);
    if(body.userName !== null && body.userName !== ""){
        searchOptions.userName = new RegExp(body.userName, 'i');
    }
    client.connect();
    const bbCollection = client.db("bloodBankDB").collection("Users");
    const searchedUser = await bbCollection.find(searchOptions).toArray();
    console.log(searchedUser, body); 
    return searchedUser;
};

const getAllUsers = async (body) => {
    client.connect();
    const bbCollection = client.db("bloodBankDB").collection("Users");
    const allUsers = await bbCollection.find().toArray();
    console.log(allUsers, body); 
    return allUsers;
};

const getUsersByBloodGroup = async (body) => {
    let searchOptions = {};
    console.log(body);
    if(body.bloodGroup !== null && body.bloodGroup !== ""){
        searchOptions.bloodGroup = new RegExp(body.bloodGroup, 'i');
    }
    client.connect();
    const bbCollection = client.db("bloodBankDB").collection("Users");
    const getUsersByBloodGroup = await bbCollection.find(searchOptions).toArray();
    console.log(getUsersByBloodGroup);
    return getUsersByBloodGroup;
};

const UpdateBloodGroupData = async (body) => {
    
};

module.exports = {
    addUser,
    deleteUser,
    searchUser,
    getAllUsers,
    getUsersByBloodGroup,
    UpdateBloodGroupData
};
