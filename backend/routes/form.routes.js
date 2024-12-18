import { Router } from "express";

const router = Router();

router.get("/messages", (req, res) => {});
router.post("/contact_us",(req,res)=>{
    const {fullname,email,subject,message} = req.body;

    if ([fullname, email, subject, message].some(field => field?.trim() === "")) {
        return res.status(400).json({ message: "All fields are required" });
    }

})

export default router;