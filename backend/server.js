import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import connectDB from './db/db.js';
import authDashboaredRouter from "./pages/api/authDashboared.routes.js";
import projectDashboaredRouter from "./pages/api/projectDashboared.routes.js";
import techDashboaredRouter from "./pages/api/techDashboared.routes.js";
import experienceDashboaredRouter from "./pages/api/ExperienceDashboared.routes.js";
import certificateDashboaredRouter from "./pages/api/certificateDashboaredRouter.routes.js";
import formRouter from "./pages/api/form.routes.js";

const port = process.env.PORT || 8000;

const app = express();

app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use(cookieParser());

// Define API routes
app.use("/dashboared/auth", authDashboaredRouter);
app.use("/dashboared/projects", projectDashboaredRouter);
app.use("/dashboared/techs", techDashboaredRouter);
app.use("/dashboared/experience", experienceDashboaredRouter);
app.use("/form", formRouter);
app.use("/dashboared/certificate", certificateDashboaredRouter);

// Serve static files for the frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
    connectDB();
    console.log("server is running on: ", port);
});

export default app;
