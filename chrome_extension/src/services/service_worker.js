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
    async (response, sender, sendResponse) => {
        console.log(response)
        try {
            switch (response.cmd) {
                case 'loadingComplete':
                    await sendWelcomeDialog();
                    break;
                case 'chatMessageReceived':
                    const {messageText, fromServerUserId} = response.data;
                    let msg = messageText;
                    let cmd = msg.substr(0, 3);
                    switch (cmd) {
                        case yo.SayMessageCommand:
                            await sendChat(msg.substr(4));
                            break;
                        case yo.SendHeartCommand:
                            await sendActionTween(fromServerUserId, 'HEART');ss
                            break;
                        case yo.SendGiftCommand:
                            await sendActionTween(fromServerUserId, 'GIFT');
                            break;
                        case yo.SendLevelCommand:
                            await sendActionTween(fromServerUserId, 'LEVEL');
                            break;
                        case yo.SendTokenCommand:
                            // not implemented
                            break;
                        case yo.SendCoinCommand:
                            await sendActionTween(fromServerUserId, 'COIN');
                            break;
                        case yo.SendEatCommand:
                            await sendActionTween(fromServerUserId, 'EAT');
                            break;
                        case yo.SendMessageCommand:
                            await sendActionTween(fromServerUserId, 'MESSAGE');
                            break;
                        case yo.ShowCommandsCommand:
                            await showCommands();
                        case yo.TranslateSpanish:
                        case yo.TranslateFrench:
                        case yo.TranslateDutch:
                        case yo.TranslateTurkish:
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

const sendWelcomeDialog = async () => {
    await sendRequest({
        cmd: 'sendWelcomeDialog',
        data:{

        }
    })
}

const sendPopup = async (title, message) => {
    await sendRequest({
        cmd: 'sendPopup',
        data: {
            title: title,
            message: message
        }
    })
}

const showCommands = async () => {
    await sendRequest({
        cmd: 'showCommands'
    })
}


