import models from './models.js';
import db from 'mongoose';

const connStr = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/yoworld?retryWrites=true&w=majority';


async function logChatMessage({fromPlayerName, messageText, fromPlayerId}) {
    const message = new models.ChatMessage({
        fromPlayerName: fromPlayerName,
        fromPlayerId: fromPlayerId,
        messageText: messageText,
        date: Date.now()
    })
    db.connect(connStr).then(() => {
        message.save()
    });

}

export default {
    logChatMessage
}