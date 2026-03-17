import express from 'express';
import protectAirForce from '../../middleware/protectRouteAIrforce.middleware.js';
import launcherController from '../../controllers/lunchers/launcher.controller.js';

const launcherRouter = express.Router();

launcherRouter.get('/:id', protectAirForce, launcherController);


export default launcherRouter;