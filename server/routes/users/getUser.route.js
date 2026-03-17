import express from 'express';
import getUserController from '../../controllers/users/getUser.controller';

const getUserRoute = express.Router();

getUserRoute.get('/getUser', getUserController);

export default getUserRoute