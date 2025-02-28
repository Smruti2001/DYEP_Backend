import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoute from './routes/job.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


// Job Routes
app.use('/job', jobRoute)

// Connecting to the database...
mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT || 5000, () => console.log(`Success : Server running on port : http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log(`${error.message} did not connect`));
