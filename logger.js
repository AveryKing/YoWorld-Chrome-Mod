const models = require('./models');

async function logChatMessage({fromPlayerName,messageText,fromPlayerId}) {
    console.log('in da logger');
    const ChatMessage = new models.ChatMessage({
        fromPlayerName: fromPlayerName,
        messageText: messageText,
        playerId: fromPlayerId,
        date: Date.now()
    })
    await ChatMessage.save()

}

module.exports = {
    logChatMessage
};