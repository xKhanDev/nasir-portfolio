import { Router } from "express";
import { deleteProject, editProject, getProjects, uploadProject } from "../controllers/project.controllers";

const router = Router();

router.get("/",getProjects);
router.post("/upload",uploadProject);
router.put("/edit/:id",editProject);
router.delete("/delete/:id",deleteProject);

export default router;