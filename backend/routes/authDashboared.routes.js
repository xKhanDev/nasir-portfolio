import express from "express";

import { connectWallet, login } from "../controllers/auth.controllers.js";
import User from "../models/user.models.js";

const router = express.Router();

router.post("/connect",connectWallet);
router.post("/login",login);
// router.post("/test",async(req,res)=>{
//     const {username,password,email} = req.body;
//     const user = await User.findOne({walletAddress:"safeerullahkhan1212"});
//     user.password = password;
//     user.username = username;
//     user.email = email;
//     await user.save();

//     res.status(200).json({user,message:"success"});
// })

export default router;