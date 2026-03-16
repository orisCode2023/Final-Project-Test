import express from 'express';
import removeLauncherController from '../controllers/removeLauncher.controller.js';

const deleteLauncherRouter = express.Router();

deleteLauncherRouter.delete('/:id', removeLauncherController);


export default deleteLauncherRouter;