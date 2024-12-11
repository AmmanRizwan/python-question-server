import express from 'express';

import {
  getAllUserData,
  createUserData, 
  getUserData, 
  updateUserData, 
  deleteUserData
} from '../controller/code.controller.js';

const Router = express.Router();

Router.get('/', getAllUserData);
Router.post('/', createUserData);
Router.get('/:id', getUserData);
Router.delete('/:id', deleteUserData);
Router.put('/:id', updateUserData);

export default Router;