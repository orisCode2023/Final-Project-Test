import express from 'express';
import loginController from '../../controllers/users/login.controller.js';

const loginRoute = express.Router();

loginRoute.post('/login', loginController);

export default loginRoute