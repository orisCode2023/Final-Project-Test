import express from 'express';
import launchersController from '../../controllers/lunchers/launchers.controller.js';
import protectAirForce from '../../middleware/protectRouteAIrforce.middleware.js';

const launchersRouter = express.Router();

launchersRouter.get('/', protectAirForce, launchersController);


export default launchersRouter;