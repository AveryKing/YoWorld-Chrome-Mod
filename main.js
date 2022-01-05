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
                            let msgTxt = data.messageText;
                            if (msgTxt.startsWith('/say')) {
                                await yoBot.sendChat(page, msgTxt.substr(4));
                            } else if (msgTxt.startsWith('/action')) {
                                await yoBot.sendChat(page, `<${msgTxt.substr(7).replace(' ', '')}>`);
                            }
                            await yoLogger.logChat(data);
                            break;
                    }
                } catch (e) {
                }
            })
        }));

})();