import {v2 as cloudinary} from "cloudinary";

const uploadOnCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file);
        return result;
    } catch (error) {
        console.log("ERROR IN CLOUDINARY",error);
        return false;
    }
}

export default uploadOnCloudinary;