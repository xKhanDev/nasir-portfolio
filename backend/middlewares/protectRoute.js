import jwt from "jsonwebtoken";

const protectRoute = (req,res,next)=>{
    const token = req.cookies?.accessToken || req.headers?.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message:"Token not found"});

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(401).json({message:"Not authorized"});
        req.user = user;
        next();
    })
}

export default protectRoute;