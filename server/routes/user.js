import express from "express";
const router = express.Router();

import { signin, signup, visitProfile } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/:username", visitProfile);

export default router;
