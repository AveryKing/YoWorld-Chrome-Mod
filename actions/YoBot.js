//noinspection JSUnresolvedVariable,JSUnresolvedFunction

import yo from '../constants.js';
import sendChat from './send_chat.js';
import createEvent from './create_event.js';
import translate from './translate.js';
import sendActionTween from './send_action_tween.js';

class YoBot {
    constructor(page) {
        this.yoFrame = page.frame({
            name: yo.CANVAS_NAME
        });
    }

    async getServerUserId() {
        return new Promise((resolve) => {
            resolve(this.yoFrame.evaluate(
                `MyLife.MyLifeInstance.getInstance()
                    .getPlayer().getCharacter()
                    .serverUserId`
            ))
        })

    }

    disable() {
        this.sendChat = null;
        this.translate = null;
        this.createEvent = null;
    }

    async sendChat(chatMessage) {
        await sendChat(this.yoFrame, chatMessage);
    }

    async sendActionTween(userTo, actionTweenType) {
        this.getServerUserId()
            .then(userFrom => sendActionTween(this.yoFrame, {
                userFrom,
                userTo,
                actionTweenType
            }))
        //
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