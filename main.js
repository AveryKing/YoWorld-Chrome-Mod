import pw from './playwright.js';
import yoLogger from './logger.js'
import yoBot from './actions/actions.js'
import logger from "./logger.js";

(async () => {
    (pw.launch
        .then(page => {
            page.on('console', async msg => {
                try {
                    const {cmd, data} = JSON.parse(msg.text());
                    switch (cmd) {
                        case 'logChatMessage':
                            let msgTxt = data.messageText;

                            if (msgTxt.startsWith('/say')) {
                                await yoBot.sendChat(page, msgTxt.substr(4));

                            } else if (msgTxt.startsWith('/action')) {
                                await yoBot.sendChat(page, `<${msgTxt.substr(7).replace(' ', '')}>`);

                            } else if (msgTxt.startsWith('/es')
                                    || msgTxt.startsWith('/fr')
                                    || msgTxt.startsWith('/nl')) {
                                yoBot.translate(msgTxt.substr(3), msgTxt.substr(1, 2))
                                    .then(translatedText => yoBot.sendChat(page, translatedText));
                            }
                            break;
                    }
                } catch (e) {
                }
            })
        }));

})();