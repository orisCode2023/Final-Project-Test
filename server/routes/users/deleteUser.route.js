import express from 'express';
import deleteUserController from '../../controllers/users/deleteUser.controller';

const deleteUserRoute = express.Router();

deleteUserRoute.put('/delete/:id', deleteUserController);

export default deleteUserRoute