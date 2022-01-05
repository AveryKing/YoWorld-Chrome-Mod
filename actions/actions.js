import doClick from './doClick.js';
import sendChat from './sendChat.js';
import createEvent from './createEvent.js';
import translate from './translate.js';

class YoBot {
    constructor(page) {

        this.yoFrame = page.frame({
            name: 'iframe_canvas_fb_https'
        })
    }

    async sendChat(chatMessage) {
        await sendChat(this.yoFrame, chatMessage);
    }

    async translate(text, language) {
        translate(text, language)
            .then((translatedText)=>{
                sendChat(this.yoFrame,translatedText)
            });
    }

    async createEvent(name, description) {
        await createEvent(this.yoFrame, name, description);
    }


}

export default YoBot;