import FlashCards from "../models/flashCard.js";

//Get all questions/answers 
export const getQuestions = async (req, res) => {
    try{
        const questions = await FlashCards.find();
        res.status(200).json(questions);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}