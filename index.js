import axios from "axios";
import  Cheerio  from "cheerio";
import fs from "fs";
import puppeteer from 'puppeteer';

async function main() {
    try {
      const url = 'https://www.google.com/search?q=%22conding%22+%40gmail.com&client=firefox-b-d&sca_esv=25d4fcab23a30d49&sxsrf=ACQVn08p6Cz-Muv-1qJ-w7pYemn6cfYsow%3A1710004983131&ei=95rsZdfWB5bikdUP0NqCoAs&ved=0ahUKEwiXrtX82OeEAxUWcaQEHVCtALQQ4dUDCBA&uact=5&oq=%22conding%22+%40gmail.com&gs_lp=Egxnd3Mtd2l6LXNlcnAiFCJjb25kaW5nIiBAZ21haWwuY29tMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABgWGB4YCjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiRPVC5BliSO3ABeAGQAQCYAZABoAHOBaoBAzAuNrgBA8gBAPgBAZgCB6ACiAbCAgoQABhHGNYEGLADwgIHECMYsAIYJ8ICCBAAGAUYHhgNwgIKEAAYBRgeGA0YD8ICCBAAGAgYHhgNmAMAiAYBkAYIkgcDMS42oAfVMA&sclient=gws-wiz-serp#ip=1'; // Replace with the target website
      const html = await axios(url);
      const emails = ScrapEmails(html.data);
    
      Writer(emails);
   return emails;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  function ScrapEmails(html) {
    const $ = Cheerio.load(html);
    const bodyText = $('body').text();
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    let matches = bodyText.match(emailRegex);
    matches=new Set(matches);
    console.log(matches);
    Writer(matches);
    return matches || [];

  }

function Writer(emails){
    const outputPath = 'output.txt';
    const writeStream = fs.createWriteStream(outputPath, { flags: 'a' });
    emails.forEach((email) => {
        writeStream.write(email + '\n', 'utf8');
      });
      writeStream.end();
}

async function googleSearch(query) {
    const browser = await puppeteer.launch({ headless: false }); // Set headless to true for a headless browser
    const page = await browser.newPage();
  
    const url ='http://127.0.0.1:8000/test_invoker'
    await page.goto(url, { waitUntil: 'domcontentloaded' });
  
    // Type the search query
    // await page.type('input[name="q"]', query);
  
    await page.keyboard.press('Enter');
  

    await page.waitForSelector('html');
  

    await page.screenshot({ path: 'google_search_results.png' });
  
    let html = await page.evaluate(() => {
      const results = document.querySelectorAll('body');
      return Array.from(results, (result) => result.textContent);
    });
  
    console.log('Search Results:');
    console.log(html);
    html=new Set(html);
    html.forEach((i, index) => {
        ScrapEmails(i);
    });
  
    // Close the browser
    await browser.close();
  }
  
  // Specify the search query
  const searchQuery = 'test';
  

  googleSearch(searchQuery);

//   main();

