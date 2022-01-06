import pw from './playwright.js';
import YoBot from './actions/actions.js'
import yo from './constants.js';

(async () => {
    (pw.launch
        .then(async page => {
            let yoBot;
            page.on('console', async message => {
                try {
                    const {data} = JSON.parse(message.text());
                    let msg = data.messageText;
                    let cmd = data.messageText.substr(0, 3);
                    switch (cmd) {
                        case yo.StartCommand:
                            yoBot = new YoBot(page);
                            break;
                        case yo.StopCommand:
                            yoBot.disable();
                            break;
                        case yo.SayMessageCommand:
                            await yoBot.sendChat(msg.substr(4));
                            break;
                        case yo.ActionCommand:
                            await yoBot.sendChat(`<${msg.substr(7).replace(' ', '')}>`);
                            break;
                        case yo.TranslateSpanish:
                        case yo.TranslateFrench:
                        case yo.TranslateDutch:
                            await yoBot.translate(msg.substr(3), msg.substr(1, 2))
                                .then(translatedText => yoBot.sendChat(translatedText));
                            break;

                    }

                } catch (e) {
                }
            })
        }));

})();