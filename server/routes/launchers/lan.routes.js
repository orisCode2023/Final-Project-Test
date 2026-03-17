import express from 'express';
import launcherController from '../../controllers/lunchers/launcher.controller.js';
import launchersController from '../../controllers/lunchers/launchers.controller.js';
import newLauncherController from '../../controllers/lunchers/newLauncher.controller.js';
import removeLauncherController from '../../controllers/lunchers/removeLauncher.controller.js';
import auth from '../../middleware/protectRoute.middelware.js';

const launcherRouter = express.Router();

launcherRouter.get('/', auth(['admin','airForce','intellingc']), launchersController);
launcherRouter.get('/:id', auth(['admin','airForce','intellingc']), launcherController);
launcherRouter.post('/', auth(['admin','intellingc']), newLauncherController);
launcherRouter.delete("/:id", auth(['admin','intellingc']), removeLauncherController);





export default launcherRouter;