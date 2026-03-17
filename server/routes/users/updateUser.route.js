import express from 'express';
import updateUserController from '../../controllers/users/updateUser.controller.js';
import protectAdmin from '../../middleware/protectRouteAdmin.middleware.js';

const updateUserRoute = express.Router();

updateUserRoute.put('/update', protectAdmin, updateUserController);

export default updateUserRoute