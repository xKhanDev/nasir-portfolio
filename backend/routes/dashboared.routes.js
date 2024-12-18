import express from "express";

import { connectWallet, login } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/connect",connectWallet);
router.post("/login",login);

export default router;