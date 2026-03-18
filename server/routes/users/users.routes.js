import express from 'express';
import auth from '../../middleware/protectRoute.middelware.js';
import updateUser from '../../controllers/users/updateUser.controller.js';
import logout from '../../controllers/users/logout.controller.js';
import register from '../../controllers/users/register.controller.js';
import login from '../../controllers/users/login.controller.js';
import deleteUser from '../../controllers/users/deleteUser.controller.js';
import allUsers from '../../controllers/users/allUsers.controller.js';

export const authRoutes = express.Router();
export const registerRoutes = express.Router();


registerRoutes.put('/update', auth(['admin']), updateUser);
registerRoutes.post('/create', auth(['admin']), register);
registerRoutes.delete('/delete/:id', auth(['admin']), deleteUser);
registerRoutes.get('/allUsers', auth(['admin']), allUsers);
authRoutes.post('/logout', logout);
authRoutes.post('/login', login);


