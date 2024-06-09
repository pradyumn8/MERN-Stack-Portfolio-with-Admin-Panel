import express from "express";
import { postTimeline, deleteTimeline, getAllTimeline } from "../controller/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.post("/add", isAuthenticated, postTimeline)
router.get("/getall", getAllTimeline)
router.delete("/delete/:id", isAuthenticated, deleteTimeline);

export default router;