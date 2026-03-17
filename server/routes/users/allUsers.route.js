import express from 'express';
import allUsersController from '../../controllers/users/allUsers.controller.js';

const allUsersRoute = express.Router();

allUsersRoute.get('/allUsers', allUsersController);

export default allUsersRoute