import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{timestamps: true});

const Certificate = mongoose.model("Certificate",certificateSchema);
export default Certificate;