const bbRepo = require('../repository/bloodBankRepository');

const addUser = (body) => {
    console.log(body);
    let addUser = bbRepo.addUser(body);
    console.log(addUser);
    return addUser;
};

const deleteUser = (body) => {
    console.log(body);
    let deleteUser = bbRepo.deleteUser(body);
    return deleteUser;
};

const searchUser = (body) => {
    console.log(body)
    let searchUser = bbRepo.searchUser(body);
    return searchUser;
}

const getAllUsers = (body) => {
    console.log(body);
    const allUsers = bbRepo.getAllUsers(body);
    return allUsers;
};

const getUsersByBloodGroup = (body) => {
    console.log(body);
    let getAllUsers = bbRepo.getUsersByBloodGroup(body);
    return getAllUsers;
};

const UpdateBloodGroupData = (body) => {
    console.log(body);
    let updateUser = bbRepo.UpdateBloodGroupData(body);
    return updateUser;
};

module.exports = {
    addUser,
    deleteUser,
    searchUser,
    getAllUsers,
    getUsersByBloodGroup,
    UpdateBloodGroupData
};
