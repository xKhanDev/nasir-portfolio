import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import connectDB from './db/db.js';
import authDashboaredRouter from "./routes/authDashboared.routes.js"
import projectDashboaredRouter from "./routes/projectDashboared.routes.js"
import techDashboaredRouter from "./routes/techDashboared.routes.js"
import experienceDashboaredRouter from "./routes/ExperienceDashboared.routes.js"
import certificateDashboaredRouter from "./routes/certificateDashboaredRouter.routes.js"
import formRouter from "./routes/form.routes.js"

const port = process.env.PORT || 8000;

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(cookieParser());


// app.use("/dashboared/auth",authDashboaredRouter);
// app.use("/dashboared/projects",projectDashboaredRouter);
// app.use("/dashboared/techs",techDashboaredRouter);
// app.use("/dashboared/experience",experienceDashboaredRouter);
// app.use("/form",formRouter);
// app.use("/dashboared/certificate",certificateDashboaredRouter);

app.get("/",(req,res)=>{
    res.send("hello, im just checking this route is deployed or not")
})


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"../frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

app.listen(port,(req,res)=>{
    connectDB();
    console.log("server is running on: ",port)
})

export default app