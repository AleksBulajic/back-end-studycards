import { Router } from "express";
import * as controllers from "../controllers/questionsControllers.js"

const router = Router()

//retrive a list of questions
router.get("/all", controllers.getQuestions)

router.post("/add", controllers.addQuestions)

export default router

//TODO add routs for full REST API


//TODO add category routes