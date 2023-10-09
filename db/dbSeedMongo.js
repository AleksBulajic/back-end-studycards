import mongoose from "mongoose";
import db from "./dbConnection.js";
import FlashCards from "../models/flashCard.js";
import data from "../data/flashCardData.JSON" assert { type: "JSON" };

// flash card data
let flashCardData = data.map((data) => {
  return {
    question: data.question,
    answer: data.answer,
  };
});

// seed to database
let makeData = async () => {
  try {
    await FlashCards.deleteMany();
    await FlashCards.create(flashCardData);
  } catch (err) {
    console.log("Error", err);
  }
};

makeData()