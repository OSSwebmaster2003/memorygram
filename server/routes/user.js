import express from "express";
const router = express.Router();

import {
  signin,
  signup,
  visitProfile,
  saveProfileInfo,
} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/:username", visitProfile);
router.patch("/:username/settings", saveProfileInfo);

export default router;
