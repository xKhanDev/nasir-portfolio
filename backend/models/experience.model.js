import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    }
},{timestamps: true});

const Experience = mongoose.model("Experience",experienceSchema);
export default Experience;