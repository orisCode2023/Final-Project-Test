import express from 'express';
import getUserController from '../../controllers/users/getUser.controller.js';

const getUserRoute = express.Router();

getUserRoute.get('/getUser', getUserController);

export default getUserRoute