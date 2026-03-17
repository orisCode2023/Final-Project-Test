import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/dbConnection.js";
import launchersRouter from "./routes/launchers/launchers.route.js";
import launcherRouter from "./routes/launchers/launcher.route.js";
import postLaunchersRouter from "./routes/launchers/newLaunchers.route.js";
import deleteLauncherRouter from "./routes/launchers/removeLauncher.router.js";
import registerRoute from "./routes/users/register.route.js";
import loginRoute from "./routes/users/login.routes.js";
import logoutRoute from "./routes/users/logout.route.js";
import deleteUserRoute from "./routes/users/deleteUser.route.js";
import updateUserRoute from "./routes/users/updateUser.route.js";
import getUserRoute from "./routes/users/getUser.route.js";
import allUsersRoute from "./routes/users/allUsers.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/launchers", launchersRouter);
app.use("/api/launchers", launcherRouter);
app.use("/api/launchers", postLaunchersRouter);
app.use("/api/launchers", deleteLauncherRouter);
app.use("/api/auth/register", registerRoute);
app.use("/api/auth/register", updateUserRoute);
app.use("/api/auth/register", deleteUserRoute);
app.use("/api/auth/register", allUsersRoute);
app.use("/api/auth", getUserRoute);
app.use("/api/auth", loginRoute);
app.use("/api/auth", logoutRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`You on port ${PORT}`);
});
