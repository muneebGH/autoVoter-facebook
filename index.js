const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://m.facebook.com/108195234208465/posts/136634131364575/?d=n&_rdc=1&_rdr"
  );

  await page.waitForSelector("#u_0_5y");
  for (var i = 0; i < 3; i++) {
    console.log(i);
    await page.click("#u_0_5y");
    await page.reload();
  }

  await browser.close();
})();
