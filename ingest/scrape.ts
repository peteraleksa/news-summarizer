import puppeteer from "puppeteer";

export async function scrapeNYTimesArticle(url: string) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    console.log(html);
}

export async function scrapeWikipediaArticle(url: string) {

}
