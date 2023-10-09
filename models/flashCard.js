import mongoose from 'mongoose';


const questrions = mongoose.Schema({
    question: String,
    answer: String,
})


const Question =  mongoose.model('Question', questrions)

export default Question;