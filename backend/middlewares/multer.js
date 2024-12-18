import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__file);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../frontend/public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    // Check for the type of file, example: only allow images
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB limit
  },
});

export default upload;
