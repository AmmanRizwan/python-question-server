import express from 'express';
import { userAuth, userLogout, userProfile, userRegister, userUpdateProfile } from '../controller/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const UserRouter = express.Router();

UserRouter.post('/', userRegister);
UserRouter.post('/auth', userAuth);
UserRouter.post('/logout', userLogout);
UserRouter.route('/profile').get(protect, userProfile).put(protect, userUpdateProfile);

export default UserRouter;