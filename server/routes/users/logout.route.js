import express from 'express';
import logoutController from '../../controllers/users/logout.controller';

const logoutRoute = express.Router();

logoutRoute.post('/logout', logoutController);

export default logoutRoute