import {Router} from "express";

import { getTechs, uploadTech } from "../../controllers/tech.controllers.js";
import upload from "../../middlewares/multer.js";
import protectRoute from "../../middlewares/protectRoute.js";

const router = Router();

router.get("/",getTechs);
router.post("/upload",protectRoute,upload.fields([{name:"techImage",maxCount:1}]),uploadTech);

export default router;