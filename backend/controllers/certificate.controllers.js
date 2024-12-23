import Certificate from "../models/certificate.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import fileDeletion from "../utils/fileDeletion.js";

// GET CERTIFICATES
export const getCertificates = async(req, res) => {
    const certificates = await Certificate.find({});

    if(certificates.length === 0) return res.status(201).json({message:"No certificates found"});

    return res.status(200).json({certificates,message:"certificates successfully fetched"});
};

// UPLOAD CERTIFICATES
export const uploadCertificates = async(req, res) => {
    const {title,description} = req.body;

    if([title,description].includes("")){
        return res.status(400).json({message:"All fields are required"});
    }

    try {
        const certificateImageLocalPath = req.files?.certificateImage?.[0].path;
        if(!certificateImageLocalPath) return res.status(400).json({message:"Certificate image is required"});

        const certificateImage = await uploadOnCloudinary(certificateImageLocalPath);
        if(!certificateImage) return res.status(500).json({message:"Internal server error"});
        fileDeletion(certificateImageLocalPath);

        const certificate = await Certificate.create({title,description,image:certificateImage?.url});
        return res.status(201).json({certificate,message:"certificate uploaded successfully"});
    } catch (error) {
        console.log("ERROR IN UPLOAD CERTIFICATES",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};