const {chromium} = require('playwright');

const launch = new Promise((resolve, reject) => {
    chromium.launchPersistentContext(
        'C:\\Users\\avery\\AppData\\Local\\Chromium\\User Data\\Default',
        {
            headless: false,
            devtools: true
        }).then(browser => {
        browser.newPage()
            .then(page => {
                page.goto('https://apps.facebook.com/playyoworld', {
                    timeout: 1337 * 69 * 420
                });
                return Promise.resolve(page);
            })
    });


})

module.exports = {
    launch
}