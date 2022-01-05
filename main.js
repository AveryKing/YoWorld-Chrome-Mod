import pw from './playwright.js';
import yoLogger from './logger.js'
import gameActions from './actions/actions.js'

(async () => {
    (pw.launch
        .then(page => {

            page.on('console', async msg => {
                try {
                    const {cmd, data} = JSON.parse(msg.text());
                    switch (cmd) {
                        case 'logChatMessage':
                            if(data.message.startsWith('/say')) {
                                await gameActions.sendChatMessage(page,'lol')
                            }
                            await yoLogger.logChatMessage(data);
                            break;
                    }
                } catch (e) {
                }
            })
        }));

})();