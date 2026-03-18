import express from 'express';
import getOneLauncher from '../../controllers/lunchers/launcher.controller.js';
import getLaunchers from '../../controllers/lunchers/launchers.controller.js';
import newLauncher from '../../controllers/lunchers/newLauncher.controller.js';
import removeLauncher from '../../controllers/lunchers/removeLauncher.controller.js';
import editLauncher from '../../controllers/lunchers/editLauncher.controller.js';
import auth from '../../middleware/protectRoute.middelware.js';

const launcherRouter = express.Router();

launcherRouter.get('/', auth(['admin','airForce','intellingc']), getLaunchers);
launcherRouter.get('/:id', auth(['admin','airForce','intellingc']), getOneLauncher);
launcherRouter.post('/', auth(['admin','intellingc']), newLauncher);
launcherRouter.delete("/:id", auth(['admin','intellingc']), removeLauncher);
launcherRouter.put("/:id", auth(['admin','intellingc']), editLauncher);





export default launcherRouter;