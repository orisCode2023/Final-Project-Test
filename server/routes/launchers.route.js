import express from 'express';
import launchersController from '../controllers/launchers.controller.js';

const launchersRouter = express.Router();

launchersRouter.get('/', launchersController);


export default launchersRouter;