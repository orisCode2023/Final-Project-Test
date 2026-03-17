import express from 'express';
import loginController from '../../controllers/users/login.controller';

const loginRoute = express.Router();

loginRoute.post('/login', loginController);

export default loginRoute