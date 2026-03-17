import express from 'express';
import registerController from '../../controllers/users/register.controller';

const registerRoute = express.Router();

registerRoute.post('/create', registerController);

export default registerRoute