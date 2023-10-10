import mongoose from 'mongoose';


const flashCards = mongoose.Schema({
    question: String,
    answer: String,
})


const FlashCards =  mongoose.model('Question', flashCards )

export default FlashCards;

//TODO add a category model