import { Router } from "express";

import { getExperiences, uploadExperience } from "../controllers/experience.controllers.js";

const router = Router();

router.get("/",getExperiences);
router.post("/upload",uploadExperience);

export default router;