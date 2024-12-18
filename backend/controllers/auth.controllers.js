import jwt from "jsonwebtoken";

import User from "../models/user.models.js";

export const connectWallet = async(req,res)=>{
    const {walletAddress} = req.body;
    if(!walletAddress) return res.status(400).json({message:"Wallet address is required"});

    try {
        const user = await User.findOne({walletAddress});
        if(!user) return res.status(404).json({message:"User not found"});

        const accessToken = jwt.sign({userId:user?._id},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"1d"
        });
    
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }
    
        res
        .cookie("accessToken",accessToken,options)
        .status(200).json({message:"Wallet connected successfully",user});

    } catch (error) {
        console.log("ERROR IN CONNECT WALLET",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export const login = async(req,res)=>{
    const {identifier,password} = req.body;

    if(!identifier || !password){
        return res.status(400).json({message:"Identifier and password are required"});
    }

    try {
        const user = await User.findOne(
            {
                $or:[{email:identifier},{username:identifier}]
            }
        );
    
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
    
        if(user?.password !== password){
            return res.status(401).json({message:"Invalid credentials"});
        }
    
        const accessToken = jwt.sign({userId:user?._id},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"1d"
        })
    
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }
    
        return res
        .cookie("accessToken",accessToken,options)
        .status(200).json({message:"Login successful"});
        
    } catch (error) {
        console.log("ERROR IN LOGIN",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
