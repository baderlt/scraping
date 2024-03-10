import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import googleSearch from './Scraper.js';
import http from 'http';
import download from './download_txt.js';
const PORT=process.env.PORT || 5000 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.post('/api/EmailScraping',googleSearch);
app.get('/api/download',download)

app.listen(PORT,()=>{
    console.log(`server runing on port:${PORT} `)
})
