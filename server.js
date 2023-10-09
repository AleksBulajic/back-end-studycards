import express from 'express';
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}!`);
  });