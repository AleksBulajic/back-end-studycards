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

// get by ID
export const findQuestion = async (req, res) => {
  try {
    const question = await FlashCards.findById(req.params.id);
    res.status(200).json(question);
    console.log(req.params.id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
//update question
// export const updateQuestion = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedQuestion = req.body;
  
//     const question = await FlashCards.findByIdAndUpdate(id, updatedQuestion, {
//       new: true,
//     });

//     res.status(200).json(question);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

//TODO be able to delete question

//TODO be able to find a specific question
