import express from 'express';
import removeLauncherController from '../../controllers/lunchers/removeLauncher.controller.js';

const launcherRouter = express.Router();

launcherRouter.get('/:id', removeLauncherController);


export default launcherRouter;