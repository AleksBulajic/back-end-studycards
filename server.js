import express from 'express';
import * as dotenv from 'dotenv'
import db from "./db/dbConnection.js";

dotenv.config()

const app = express();

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}!`);
  });