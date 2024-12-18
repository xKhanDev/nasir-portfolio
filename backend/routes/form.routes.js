import { Router } from "express";

import Contact from "../models/contact.model.js";
import protectRoute from "../middlewares/protectRoute.js"

const router = Router();

router.get("/messages",protectRoute,async(req, res) => {
    try {
        const messages = await Contact.find({});
        if(!messages) return res.status(500).json({message:"Internal server error"});
    
        return res.status(200).json({messages,message:"success"});
    } catch (error) {
        console.log("ERROR IN GET MESSAGES",error.message);
    }
});

router.post("/contact_us",async(req,res)=>{
    try {
        const {fullname,email,subject,message} = req.body;
    
        if ([fullname, email, subject, message].some(field => field?.trim() === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }
    
        const contact = await Contact.create({
            fullname,
            email,
            subject,
            message
        });
    
        if(!contact) return res.status(500).json({message:"Error while creating contact"});
    
        return res.status(200).json({
            contact,message:"Message sent successfully"});
    } catch (error) {
        console.log("ERROR IN CONTACT US",error.message);
    }
})

export default router;