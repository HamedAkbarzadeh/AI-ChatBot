import express, { json } from 'express';
import dotenv from 'dotenv';
import geminiRouter from './gemini/gemini-route.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api' ,geminiRouter);

const port = process.env.PORT;
app.listen(port , () => {console.log("connected on port : " + port)})