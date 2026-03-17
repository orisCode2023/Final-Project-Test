import express from 'express';
import auth from '../../middleware/protectRoute.middelware.js';
import updateUserController from '../../controllers/users/updateUser.controller.js';
import logoutController from '../../controllers/users/logout.controller.js';
import registerController from '../../controllers/users/register.controller.js';
import loginController from '../../controllers/users/login.controller.js';
import getUserController from '../../controllers/users/getUser.controller.js';
import deleteUserController from '../../controllers/users/deleteUser.controller.js';
import allUsersController from '../../controllers/users/allUsers.controller.js';

export const authRoutes = express.Router();
export const registerRoutes = express.Router();


registerRoutes.put('/update', auth(['admin']), updateUserController);
registerRoutes.post('/create', auth(['admin']), registerController);
registerRoutes.delete('/delete/:id', auth(['admin']), deleteUserController);
registerRoutes.get('/allUsers', auth(['admin']), allUsersController);
authRoutes.post('/logout', logoutController);
authRoutes.post('/login', loginController);
authRoutes.get('/getUser', auth(['admin']),  getUserController);


