import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import connectDB from './db/db.js';
import authDashboaredRouter from "./routes/authDashboared.routes.js";
import projectDashboaredRouter from "./routes/projectDashboared.routes.js";
import techDashboaredRouter from "./routes/techDashboared.routes.js";
import experienceDashboaredRouter from "./routes/ExperienceDashboared.routes.js";
import certificateDashboaredRouter from "./routes/certificateDashboaredRouter.routes.js";
import formRouter from "./routes/form.routes.js";

const port = 8000;

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
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Catch-all route for SPA (Single Page Application)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    console.log("Resolved Path:", path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
    connectDB();
    console.log("server is running on: ", port);
});

export default app;
