import {chromium} from "playwright";

const launch = new Promise((resolve) => {
    chromium.launchPersistentContext(
        'C:\\Users\\avery\\AppData\\Local\\Chromium\\User Data\\Default',
        {
            headless: false,
            devtools: true
        }).then(browser => {
        browser.newPage()
            .then(page => {
                resolve(page);
                page.goto('https://apps.facebook.com/playyoworld', {
                    timeout: 1337 * 69 * 420
                });
            })
    });


})

export default {
    launch
}