//noinspection JSUnresolvedVariable,JSUnresolvedFunction

import yo from '../constants.js';
import send_chat from './send_chat.js';
import create_event from './create_event.js';
import translate from './translate.js';
import send_action_tween from './send_action_tween.js';

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
        await send_chat(this.yoFrame, chatMessage);
    }

    async sendActionTween(userTo, actionTweenType) {
        this.getServerUserId()
            .then(userFrom => send_action_tween(this.yoFrame, {
                userFrom,
                userTo,
                actionTweenType
            }))
    }

    async translate(text, language) {
        translate(text, language)
            .then((translatedText) => {
                send_chat(this.yoFrame, translatedText)
            });
    }

    async createEvent(name, description) {
        await create_event(this.yoFrame, name, description);
    }


}

export default YoBot;