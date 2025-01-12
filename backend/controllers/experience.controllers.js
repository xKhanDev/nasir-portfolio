import Experience from "../models/experience.model.js";

export const getExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const uploadExperience = async (req, res) => {
    const {title,description,from,to} = req.body;

    if([title,description,from,to].some(field => field?.trim() === "")){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
        const existingExperience = await Experience.findOne({ title });
        if(existingExperience) {
            return res.status(400).json({ message: "Experience already exists" });
        }

        const experience = await Experience.create({
            title,
            description,
            from,
            to
        });
        
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}