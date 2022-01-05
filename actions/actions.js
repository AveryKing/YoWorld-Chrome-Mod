import yo from '../constants.js';
import sendChat from './sendChat.js';
import createEvent from './createEvent.js';
import translate from './translate.js';

class YoBot {
    constructor(page) {
        this.yoFrame = page.frame({
            name: yo.CANVAS_NAME
        });
    }

    disable() {
        this.sendChat = null;
        this.translate = null;
        this.createEvent = null;
    }

    async sendChat(chatMessage) {
        await sendChat(this.yoFrame, chatMessage);
    }

    async translate(text, language) {
        translate(text, language)
            .then((translatedText) => {
                sendChat(this.yoFrame, translatedText)
            });
    }

    async createEvent(name, description) {
        await createEvent(this.yoFrame, name, description);
    }


}

export default YoBot;