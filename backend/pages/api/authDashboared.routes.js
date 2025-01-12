import express from "express";
import { connectWallet, login } from "../../controllers/auth.controllers.js";
import User from "../../models/user.models.js";
import { generateAccessToken } from "../../utils/generateToken.js";

const router = express.Router();

router.post("/connect",connectWallet);
router.post("/login",login);

router.post("/refresh",async(req,res)=>{
    const {refreshToken} = req.cookies;

    if(!refreshToken) return res.status(401).json({message:"Token not found"});

    try {
        const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(payload.id);
    
        if (!user || user.refreshToken !== refreshToken) {
          return res.status(403).json({ message: 'Invalid refresh token' });
        }
    
        const newAccessToken = generateAccessToken(user);
        res.status(200).json({ accessToken: newAccessToken });
      } catch (error) {
        res.status(403).json({ message: 'Invalid or expired refresh token' });
      }
});

export default router;