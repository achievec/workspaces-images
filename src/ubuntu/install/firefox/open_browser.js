const { firefox } = require('playwright');

(async () => {
    let browser;
    try {
        browser = await firefox.connect({
            wsEndpoint: 'ws://127.0.0.1:9222/playwright'
        });

        const context = await browser.newContext();
        const page = await context.newPage();
        console.log(await page.title());
    } catch (error) {
        console.log(error);
    }
})();