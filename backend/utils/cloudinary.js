import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_SECRET_KEY,
    secure: true
})

const uploadOnCloudinary = async (file) => {
    if(file === undefined) return null;
    const result = await cloudinary.uploader.upload(file,{folder:"Portiflio"});
    return result;
}

export default uploadOnCloudinary;