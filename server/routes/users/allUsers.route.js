import express from 'express';
import allUsersController from '../../controllers/users/allUsers.controller.js';
import protectAdmin from '../../middleware/protectRouteAdmin.middleware.js';

const allUsersRoute = express.Router();

allUsersRoute.get('/allUsers', protectAdmin, allUsersController);

export default allUsersRoute