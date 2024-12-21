import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';

import connectDB from './db/db.js';
import protectRoute from "./middlewares/protectRoute.js";
import authDashboaredRouter from "./routes/authDashboared.routes.js"
import projectDashboaredRouter from "./routes/projectDashboared.routes.js"
import techDashboaredRouter from "./routes/techDashboared.routes.js"
import ExperienceDashboaredRouter from "./routes/ExperienceDashboared.routes.js"
import formRouter from "./routes/form.routes.js"

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/dashboared/auth",authDashboaredRouter);
app.use("/dashboared/projects",projectDashboaredRouter);
app.use("/dashboared/techs",techDashboaredRouter);
app.use("/dashboared/experience",ExperienceDashboaredRouter);
app.use("/form",formRouter);

app.listen(port,(req,res)=>{
    connectDB();
    console.log("server is running on: ",port)
})

export default app