import Tech from "../models/tech.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js"
import fileDeletion from "../utils/fileDeletion.js";

// GET TECH
export const getTechs = async (req, res) => {
    try {
        const techs = await Tech.find({});

        if(!techs) return res.status(404).json({message:"No techs found"});

        return res.status(200).json({techs,message:"techs successfully fetched"});

    } catch (error) {
        console.log("ERROR IN GET TECHS",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

// UPLOAD TECH
export const uploadTech = async (req, res) => {
    const {name,category,level} = req.body;

    if(!name || !category || !level) return res.status(400).json({message:"All fields are required"});

    try{
        const existedTech = await Tech.findOne({name});

        if(existedTech) return res.status(400).json({message:"Tech already exists"});

        const techImage = req.files?.techImage?.[0]?.path;
        if(!techImage) return res.status(400).json({message:"Tech image is required"});
        
        const result = await uploadOnCloudinary(techImage)
        if(!result) return res.status(500).json({message:"Error while uploading on cloudinary"});
        fileDeletion(techImage);

        const tech = await Tech.create({name,category,level,image:result?.url});

        return res.status(201).json({tech,message:"tech uploaded successfully"});

    }catch(error){
        console.log("ERROR IN UPLOAD TECH",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};