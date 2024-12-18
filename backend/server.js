import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';

import dashboaredRouter from "./routes/dashboared.routes.js"
import connectDB from './db/db.js';

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/dashboared",dashboaredRouter);

app.listen(port,(req,res)=>{
    connectDB();
    console.log("server is running on: ",port)
})

export default app