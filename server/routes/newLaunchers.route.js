import express from 'express';
import newLauncherController from '../controllers/newLauncher.controller.js';

const postLaunchersRouter = express.Router();

postLaunchersRouter.post('/', newLauncherController);


export default postLaunchersRouter;