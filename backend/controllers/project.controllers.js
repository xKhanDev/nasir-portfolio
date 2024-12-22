import Project from "../models/project.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import fileDeletion from "../utils/fileDeletion.js";

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
    const {title,githubLink,previewLink,category} = req.body;

    if([title,githubLink,previewLink,category].some(field => field?.trim() === "")){
        return res.status(400).json({message:"All fields are required"});
    }

    try {
        const  projectImageLocalPath = req.files?.projectImage?.[0].path;
        if(!projectImageLocalPath) return res.status(400).json({message:"Project image is required"});
        const projectImage = await uploadOnCloudinary(projectImageLocalPath)
        if(!projectImage) return res.status(500).json({message:"Internal server error"});
        fileDeletion(projectImageLocalPath);

        const project = await Project.create(
            {
                title,
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
    const { title, githubLink, previewLink, category } = req.body;
    const projectId = req.params.id;

    try {
        const checkProject = await Project.findById(projectId);
        if (!checkProject) return res.status(404).json({ message: "Project not found" });

        if ([title, githubLink, previewLink, category].some(field => field?.trim() === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let projectImageLocalPath = req.files?.updateProjectImage?.[0]?.path;
        let updateProjectImage;

        if (projectImageLocalPath) {
            updateProjectImage = await uploadOnCloudinary(projectImageLocalPath);
            if (!updateProjectImage) {
                return res.status(500).json({ message: "Error uploading project image" });
            }
            fileDeletion(projectImageLocalPath);
        }

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            {
                title,
                githubLink,
                previewLink,
                category,
                image: updateProjectImage ? updateProjectImage.url : checkProject.image,
            },
            { new: true }
        );

        return res.status(200).json({ project: updatedProject, message: "Project updated successfully" });
    } catch (error) {
        console.log("ERROR IN EDIT PROJECT", error.message);
        res.status(500).json({ message: "Internal server error" });
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
