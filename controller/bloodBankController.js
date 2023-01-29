const bbService = require('../service/bloodBankService');

const addUser = async (req, res) => {
    let addUser = await bbService.addUser(req.body);
    res.send(addUser);
};

const deleteUser = async (req, res) => {
    let deleteUser = await bbService.deleteUser(req.body);
    res.send(deleteUser);
};

const searchUser = async (req, res) => {
    let searchUser = await bbService.searchUser(req.body);
    res.send(searchUser);
};

const getAllUsers = async (req, res) => {
    console.log(req.body);
    let allUsers = await bbService.getAllUsers(req.body);
    console.log(allUsers);
    res.send(allUsers);
};

const getUsersByBloodGroup = async (req, res) => {
    console.log(req.body);
    let getUser = await bbService.getAllBloodGroupData(req.body);
    res.send(getUser);
};

const UpdateBloodGroupData = async (req, res) => {
    let updateUser = await bbService.UpdateBloodGroupData(req.body);
    res.send(updateUser);
};

module.exports = {
    addUser,
    deleteUser,
    searchUser,
    getAllUsers,
    getUsersByBloodGroup,
    UpdateBloodGroupData
};

/*
    Blood bank User 
    firstName
    lastName
    bloodGroup
    phone
    email
    address
*/