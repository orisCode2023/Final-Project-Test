import express from 'express';
import updateUserController from '../../controllers/users/updateUser.controller.js';

const updateUserRoute = express.Router();

updateUserRoute.put('/update', updateUserController);

export default updateUserRoute