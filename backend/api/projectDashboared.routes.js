import { Router } from "express";

import { deleteProject, editProject, getProjects, uploadProject } from "../controllers/project.controllers.js";
import upload from "../middlewares/multer.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router();

router.get("/",getProjects);
router.post("/upload",protectRoute,upload.fields([{name:"projectImage",maxCount:1}]),uploadProject);
router.put("/edit/:id",protectRoute,upload.fields([{name:"updateProjectImage",maxCount:1}]),editProject);
router.delete("/delete/:id",protectRoute,deleteProject);

export default router;