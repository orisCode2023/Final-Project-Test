import express from 'express';
import getUserController from '../../controllers/users/getUser.controller.js';
import protectAdmin from '../../middleware/protectRouteAdmin.middleware.js';

const getUserRoute = express.Router();

getUserRoute.get('/getUser', protectAdmin,  getUserController);

export default getUserRoute