const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

console.log("1");

(async() => {
    console.log("2");
    const browser = await puppeteer.launch({args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
        ]});
    const page = await browser.newPage();
    console.log("2.5");
    //await page.setRequestInterceptionEnabled(true);

    console.log("3");
    const p1 = await page.goto('https://google.com');
    // Type our query into the search bar
    //const p11 = await page.type('puppeteer');
    //const p2 = await page.click('input[type="submit"]');
    // Wait for the results to show up
    //const p3 = await page.waitForNavigation();
    console.log("4");
    const p4 = await page.screenshot({path: `puppeteer_${(new Date()).getTime()}.png`});
    console.log("5");
    browser.close();
    console.log("6");
})();