import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import googleSearch from './Scraper.js';
import download from './download_txt.js';
import { launch } from 'chrome-launcher';

const PORT=process.env.PORT || 5000 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/EmailScraping',googleSearch);
app.get('/api/downloadfile/:file',download)
app.get('/api/test',async (req,res)=>{


    const chrome = await launch({
        startingUrl: 'https://google.com'
    });
    console.log('Chrome debuggable on port:', chrome.port);
    console.log('Executable path:', chrome.executablePath);

})
app.listen(PORT,(req,res)=>{
    console.log(`server runing on port:${PORT} `)
})
