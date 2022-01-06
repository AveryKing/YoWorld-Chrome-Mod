//noinspection JSUnresolvedVariable,JSUnresolvedFunction

export default async function send_chat(yoFrame, chatMessage) {
    await yoFrame.evaluate((chatMessage) => {
        MyLife.MyLifeInstance.getInstance().getServer()
            .sendPublicMessage(MyLife.Chat.encodePublicMessage(chatMessage), 0)
    }, chatMessage)
}
