import express from 'express';
import * as dotenv from 'dotenv'
import db from "./db/dbConnection.js";
import questionsRoutes from "./routes/questionsRoutes.js";
import cors from 'cors'

dotenv.config()

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT 

//set base route 
app.use("/questions", questionsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}!`);
  });