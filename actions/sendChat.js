//noinspection JSUnresolvedVariable,JSUnresolvedFunction

export default async function sendChat(yoFrame, chatMessage) {
    await yoFrame.evaluate((chatMessage) => {
        MyLife.MyLifeInstance.getInstance().getServer()
            .sendPublicMessage(MyLife.Chat.encodePublicMessage(chatMessage), 0)
    }, chatMessage)
}
