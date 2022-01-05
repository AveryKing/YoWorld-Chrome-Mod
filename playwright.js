import {chromium} from "playwright";
import yo from './constants.js';

const launch = new Promise((resolve) => {
    chromium.launchPersistentContext(
        yo.BROWSER_DATA_DIRECTORY,
        {
            headless: false,
            devtools: true
        }).then(browser => {
        browser.newPage()
            .then(page => {
                resolve(page);
                page.goto(yo.APP_URL, {
                    timeout: 1337 * 69 * 420
                });
            })
    });


})

export default {
    launch
}