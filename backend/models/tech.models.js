import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    level:["beginner","intermediate","expert"]
},{timestamps: true});

const Tech = mongoose.model("Tech",techSchema);
export default Tech;