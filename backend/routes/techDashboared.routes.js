import {Router} from "express";

import { getTechs, uploadTech } from "../controllers/tech.controllers.js";
import upload from "../middlewares/multer.js";

const router = Router();

router.get("/",getTechs);
router.post("/upload",upload.single("techImage"),uploadTech);

export default router;