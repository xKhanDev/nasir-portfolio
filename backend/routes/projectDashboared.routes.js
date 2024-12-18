import { Router } from "express";

import { deleteProject, editProject, getProjects, uploadProject } from "../controllers/project.controllers.js";
import upload from "../middlewares/multer.js";

const router = Router();

router.get("/",getProjects);
router.post("/upload",upload.fields([{name:"projectImage",maxCount:1}]),uploadProject);
router.put("/edit/:id",upload.fields([{name:"projectImage",maxCount:1}]),editProject);
router.delete("/delete/:id",deleteProject);

export default router;