import express from 'express';
import launcherController from '../controllers/launcher.controller.js';

const launcherRouter = express.Router();

launcherRouter.get('/:id', launcherController);


export default launcherRouter;