import fs from "fs"

const fileDeletion = (imagePath) => {
    if(fs.existsSync(imagePath)){
        fs.unlinkSync(imagePath);
    }
    return true;
}

export default fileDeletion;