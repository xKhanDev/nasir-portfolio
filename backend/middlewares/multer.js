import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cd(null,path.resolve(__dirname,"../frontend/public/uploads"));
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}-${Date.now()}`);
    }
})

const upload = multer({storage});

export default upload;