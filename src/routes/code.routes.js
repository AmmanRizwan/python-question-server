import express from 'express';

import {
  getAllUserData,
  createUserData, 
  getUserData, 
  updateUserData, 
  deleteUserData
} from '../controller/code.controller.js';

const Router = express.Router();

Router.route('/').get(getAllUserData).post(createUserData);
Router.route('/:id').get(getUserData).put(updateUserData).delete(deleteUserData);


export default Router;