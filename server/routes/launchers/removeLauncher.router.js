import express from "express";
import removeLauncherController from "../../controllers/lunchers/removeLauncher.controller.js";

const deleteLauncherRouter = express.Router();

deleteLauncherRouter.delete("/:id", removeLauncherController);

export default deleteLauncherRouter;
