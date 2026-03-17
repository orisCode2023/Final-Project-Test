import express from "express";
import removeLauncherController from "../../controllers/lunchers/removeLauncher.controller.js";
import protectIntelligenc from "../../middleware/protectRouteIntelligence.middleware.js";

const deleteLauncherRouter = express.Router();

deleteLauncherRouter.delete("/:id", protectIntelligenc, removeLauncherController);

export default deleteLauncherRouter;
