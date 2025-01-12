import { Router } from "express";

import { getExperiences, uploadExperience } from "../controllers/experience.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router();

router.get("/",getExperiences);
router.post("/upload",protectRoute,uploadExperience);

export default router;