import express from 'express';
import deleteUserController from '../../controllers/users/deleteUser.controller.js';

const deleteUserRoute = express.Router();

deleteUserRoute.delete('/delete/:id', deleteUserController);

export default deleteUserRoute