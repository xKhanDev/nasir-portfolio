import Project from "../models/project.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

// GET PROJECT
export const getProjects = async (req, res) => {
    try{
        const projects = await Project.find({});

        if(!projects) return res.status(404).json({message:"No projects found"});

        res.status(200).json({projects,message:"projects successfully fetched"});
    }catch(error){
        console.log("ERROR IN GET PROJECTS",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

// UPLOAD PROJECT
export const uploadProject = async (req, res) => {
    const {title,description,githubLink,previewLink,category} = req.body;

    if([title,description,githubLink,previewLink,category].some(field => field?.trim() === "")){
        return res.status(400).json({message:"All fields are required"});
    }

    try {
        const projectImage = req.file?.projectImage?.path;
        console.log("PROJECT IMAGE IS THIS PATH:",projectImage);
        const result = await uploadOnCloudinary(projectImage)
        if(!result) return res.status(500).json({message:"Internal server error"});

        const project = await Project.create({title,description,image:result.url,githubLink,previewLink,category});

        return res.status(201).json({project,message:"project uploaded successfully"});

    } catch (error) {
        console.log("ERROR IN UPLOAD PROJECT",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

// EDIT PROJECT
export const editProject = async (req, res) => {
    const {title,description,githubLink,previewLink,category} = req.body;
    const projectId = req.params.id;

    if([title,description,githubLink,previewLink,category].some(field => field?.trim() === "")){
        return res.status(400).json({message:"All fields are required"});
    }

    try{
        const project = await Project.findByIdAndUpdate(projectId,
        {
            title,description,githubLink,previewLink,category
        },{new:true});

        return res.status(200).json({project,message:"project updated successfully"});    
    }catch(error){
        console.log("ERROR IN EDIT PROJECT",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

// DELETE PROJECT
export const deleteProject = async (req, res) => {
    const projectId = req.params.id;
    try{
        const project = await Project.findByIdAndDelete(projectId);

        return res.status(200).json({project,message:"project deleted successfully"});
    }catch(error){
        console.log("ERROR IN DELETE PROJECT",error.message);
        res.status(500).json({message:"Internal server error"});
    }
};