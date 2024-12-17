import jwt from "jsonwebtoken";

const protectRoute = (req,res,next)=>{
    const token = req.cookies?.accessToken;

    if(!token) return res.status(401).json({message:"Not authorized"});

    jwt.verify({userId},process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(401).json({message:"Not authorized"});
        req.user = user;
        next();
    })
}

export default protectRoute;