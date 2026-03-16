import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConnection.js";

import launchersRouter from "./routes/launchers.route.js";
import launcherRouter from "./routes/launcher.route.js";
import postLaunchersRouter from "./routes/newLaunchers.route.js";


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "url of the react",
    credentials: true,
  }),
);
app.use('/api/launchers', launchersRouter);
app.use('/api/launchers', launcherRouter);
app.use('/api/launchers', postLaunchersRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`You on port ${PORT}`);
});
