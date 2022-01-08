import yo from '../constants.js';

self.oninstall = () => {

}


const sendRequest = async (yoData) => {
    return new Promise((resolve) => {
        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, yoData, (response) => {
                resolve(response);
            });
        });
    })

}

chrome.runtime.onMessage.addListener(
    async  (response, sender, sendResponse) => {
        console.log(response)
        try {
            switch (response.cmd) {
                case 'chatMessageReceived':
                    const {messageText, fromServerUserId} = response.data;
                    let msg = messageText;
                    let cmd = msg.substr(0, 3);
                    switch (cmd) {
                        case yo.SayMessageCommand:
                            await sendChat(msg.substr(4));
                            break;
                        case yo.SendHeartCommand:
                            await sendActionTween(fromServerUserId, 'HEART');
                            break;
                        case yo.SendGiftCommand:
                            await sendActionTween(fromServerUserId, 'GIFT');
                            break;
                        case yo.TranslateSpanish:
                        case yo.TranslateFrench:
                        case yo.TranslateDutch:
                        case yo.TranslateArabic:
                            //lang.translate(msg.substr(3), msg.substr(1, 2))
                              //  .then(translatedText => sendChat(translatedText));
                            break;
                    }
            }
        } catch (e) {
            console.log(e)
        }

    }
);

const sendChat = async (message) => {
    await sendRequest({
        cmd: 'sendChatMessage',
        message: message
    })
}

const sendActionTween = async (userTo, tweenType) => {
    await sendRequest({
        cmd: 'sendActionTween',
        userTo: userTo,
        tweenType: tweenType
    })
}
