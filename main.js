import pw from './playwright.js';
import yoLogger from './logger.js'
import yoBot from './actions/actions.js'

(async () => {
    (pw.launch
        .then(page => {

            page.on('console', async msg => {
                try {
                    const {cmd, data} = JSON.parse(msg.text());
                    switch (cmd) {
                        case 'logChatMessage':

                            if(data.messageText.startsWith('/say')) {
                                await yoBot.sendChatMessage(page,data.messageText.substr(4));
                            }
                            await yoLogger.logChatMessage(data);
                            break;
                    }
                } catch (e) {
                }
            })
        }));

})();