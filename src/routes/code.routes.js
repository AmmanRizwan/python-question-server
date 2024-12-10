const express = require('express');
const { 
  getAllUserData,
  getUserData,
  createUserData,
  updateUserData,
  deleteUserData
} = require('../controller/code.controller.js');


const Router = express.Router();

Router.route('/').get(getAllUserData).post(createUserData);
Router.route('/:id').get(getUserData).put(updateUserData).delete(deleteUserData);


module.exports = Router;