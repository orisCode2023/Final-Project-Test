import express from 'express';
import newLauncherController from '../../controllers/lunchers/newLauncher.controller.js';
import protectIntelligenc from '../../middleware/protectRouteIntelligence.middleware.js';

const postLaunchersRouter = express.Router();

postLaunchersRouter.post('/', protectIntelligenc, newLauncherController);

export default postLaunchersRouter;