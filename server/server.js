import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/dbConnection.js";
import launcherRouter from "./routes/launchers/lan.routes.js";
import {authRoutes, registerRoutes} from "./routes/users/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());

app.use("/api/launchers", launcherRouter);
app.use('/api/auth', authRoutes);
app.use('/api/auth/register', registerRoutes);


app.listen(PORT, () => {
  connectDb();
  console.log(`You on port ${PORT}`);
});
