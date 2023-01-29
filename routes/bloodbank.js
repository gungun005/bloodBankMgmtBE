const express = require('express')
const router = express.Router()
const bbController = require('../controller/bloodBankController');

//Creates the users and add there details and the blood groups 
//Deletes the users and remove there details
//Update there details.

router.route('/')
      .get(bbController.getAllUsers)
      .post(bbController.addUser)
      .delete(bbController.deleteUser)

//Searches for the blood Group and the req.
//Update the blood group data and deletes the data

router.route('/id')
      .get(bbController.getUsersByBloodGroup)
      .patch(bbController.UpdateBloodGroupData)


module.exports = router;