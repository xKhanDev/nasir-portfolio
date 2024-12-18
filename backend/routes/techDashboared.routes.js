import {Router} from "express";
import { deleteTech, getTechs, uploadTech } from "../controllers/tech.controllers";

const router = Router();

router.get("/",getTechs);
router.post("/upload",uploadTech);

export default router;