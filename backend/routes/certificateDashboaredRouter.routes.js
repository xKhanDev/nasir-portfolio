import { Router } from "express";

import { getCertificates, uploadCertificates } from "../controllers/certificate.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";
import upload from "../middlewares/multer.js"

const router = Router();

router.get("/",getCertificates);
router.post("/upload",protectRoute,upload.fields([{name:"certificateImage",maxCount:1}]),uploadCertificates);

export default router;