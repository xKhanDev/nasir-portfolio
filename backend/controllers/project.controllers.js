import Project from "../models/project.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import fileDeletion from "../utils/fileDeletion.js";
import fileDelection from "../utils/fileDeletion.js";

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
        const  projectImageLocalPath = req.files?.projectImage?.[0].path;
        const projectImage = await uploadOnCloudinary(projectImageLocalPath)
        if(!projectImage) return res.status(500).json({message:"Internal server error"});
        fileDelection(projectImageLocalPath);

        const project = await Project.create(
            {
                title,
                description,
                image:projectImage?.url,
                githubLink,
                previewLink,
                category
            });

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

    const checkProject = await Project.findById(projectId);
    if(!checkProject) return res.status(404).json({message:"Project not found"});

    if([title,description,githubLink,previewLink,category].some(field => field?.trim() === "")){
        return res.status(400).json({message:"All fields are required"});
    }

    try{
        let projectImageLocalPath = req.files?.projectImage?.[0]?.path;
        let projectImage = null;
        if(projectImageLocalPath){
            console.log("PROJECT IMAGE IS THIS PATH:",projectImageLocalPath);
            projectImage = await uploadOnCloudinary(projectImageLocalPath);
            if(!projectImage) return res.status(500).json({message:"Error uploading project image"});
            fileDeletion(projectImageLocalPath);
        }

        const project = await Project.findByIdAndUpdate(projectId,
        {
            title,
            description,
            githubLink,
            previewLink,
            category,
            image: projectImage ? projectImage?.url : checkProject?.image
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