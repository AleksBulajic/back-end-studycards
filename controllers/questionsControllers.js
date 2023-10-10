import FlashCards from "../models/flashCard.js";

//Get all questions/answers
export const getQuestions = async (req, res) => {
  try {
    const questions = await FlashCards.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// POST able to add games to the DB
export const addQuestions = async (req, res) => {
  try {
    const question = new FlashCards(req.body);
    await question.save();
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//TODO be able to update question


//TODO be able to delete question


//TODO be able to find a specific question