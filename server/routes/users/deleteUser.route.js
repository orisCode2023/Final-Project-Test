import express from 'express';
import deleteUserController from '../../controllers/users/deleteUser.controller.js';
import protectAdmin from '../../middleware/protectRouteAdmin.middleware.js';

const deleteUserRoute = express.Router();

deleteUserRoute.delete('/delete/:id', protectAdmin, deleteUserController);

export default deleteUserRoute