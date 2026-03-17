import express from 'express';
import registerController from '../../controllers/users/register.controller.js';
import protectAdmin from '../../middleware/protectRouteAdmin.middleware.js';

const registerRoute = express.Router();

registerRoute.post('/create', protectAdmin, registerController);

export default registerRoute