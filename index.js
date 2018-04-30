const puppeteer = require("puppeteer");
const someUser,
  formId
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://${someUser}.typeform.com/to/${formId}`);
  page.waitForNavigation({ waitUntil: "networkidle" });
  setTimeout(async () => {
    await page.keyboard.press("Enter");
    setTimeout(async () => {
      await page.keyboard.press("d");
      setTimeout(async () => {
        await page.keyboard.press("Enter");
        setTimeout(async () => {
          await page.keyboard.press("Enter");
          setTimeout(async () => {
            await page.keyboard.press("Enter");
            await page.screenshot({
              path: `screenshots/${new Date().toUTCString()}.png`
            });
            await browser.close();
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 5000);
})();
