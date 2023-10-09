import { Router } from "express";
import * as controllers from "../controllers/questionsControllers.js"

const router = Router()

//retrive a list of questions
router.get("/all", controllers.getQuestions)

export default router