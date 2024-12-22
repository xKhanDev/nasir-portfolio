import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import connectDB from './db/db.js';
import protectRoute from "./middlewares/protectRoute.js";
import authDashboaredRouter from "./routes/authDashboared.routes.js"
import projectDashboaredRouter from "./routes/projectDashboared.routes.js"
import techDashboaredRouter from "./routes/techDashboared.routes.js"
import ExperienceDashboaredRouter from "./routes/ExperienceDashboared.routes.js"
import formRouter from "./routes/form.routes.js"

const port = process.env.PORT || 8000;

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(cookieParser());


app.use("/dashboared/auth",authDashboaredRouter);
app.use("/dashboared/projects",projectDashboaredRouter);
app.use("/dashboared/techs",techDashboaredRouter);
app.use("/dashboared/experience",ExperienceDashboaredRouter);
app.use("/form",formRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"./frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

app.listen(port,(req,res)=>{
    connectDB();
    console.log("server is running on: ",port)
})

export default app