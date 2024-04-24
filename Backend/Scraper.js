import Cheerio from "cheerio";
import fs from "fs";
import puppeteer from "puppeteer";
let outputPath = "";

///////// scrape emails from html
const ScrapEmails = (html) => {
  try{
  const $ = Cheerio.load(html);
  const bodyText = $("body").text();
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  let matches = bodyText.match(emailRegex);
  matches = new Set(matches);
  Writer(matches);
  return matches || [];
  }catch(e)
{
console.log('error in scarping email from html ... ')
console.log(e);
}};

/////// create file and write the emails scraped
const Writer = (emails) => {
  try {
    let date = new Date().toISOString().replace(/[:.]/g, "-");
    outputPath = "output" + date + ".txt";

    if (emails.size > 0) {
      const writeStream = fs.createWriteStream(`files/${outputPath}`, {
        flags: "a",
      });
      emails.forEach((email) => {
        writeStream.write(email + "\n", "utf8");
      });
      writeStream.end();
      return true;
    }
    return false;
  } catch (e) {
    console.log('thr error in writing ... ')
    console.log(e);
    res.status(500).json({ message: "Server Error ty again ..!" });
  }
};

////function for scraping emails with pappeter
const googleSearch = async (req, res) => {
  try {
    if (!req.body?.url)
      return res.status(400).json({ message: "Url Not Found .. !" });
    const { url } = req.body;
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    }); // Set headless to true for a headless browser
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Type the search query
    // await page.type('input[name="q"]', query);
    
    await page.keyboard.press("Enter");
    await page.waitForSelector("html");
    // let date=new Date().toISOString().replace(/[:.]/g, '-');
    // let path='screenshot'+date+'.png';
    // await page.screenshot({path });
    let html = await page.evaluate(() => {
      const results = document.querySelectorAll("body");
      return Array.from(results, (result) => result.textContent);
    });
    let emails = [];
    html = new Set(html);
    html.forEach((i, index) => {
      let item = ScrapEmails(i);
      emails = [...item];
    });
    // Close the browser
    await browser.close();
    return res
      .status(200)
      .json({ message: "success", resultat: emails, file: outputPath });
  } catch (e) {
    console.log('error in puppeteer ... ')
    console.log(e);
    res.status(500).json({ message: "Server Error ty again ..!" });
  }
};

export default googleSearch;
