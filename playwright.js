const {chromium} = require('playwright');

async function launch() {
    const browser = await chromium.launchPersistentContext(
        'C:\\Users\\avery\\AppData\\Local\\Chromium\\User Data\\Default',
        {
            headless: false,
            devtools: true
        });

    browser.newPage()
        .then(page => {
            page.goto('https://apps.facebook.com/playyoworld');
            return page;
        })
}

module.exports = {
    launch
}