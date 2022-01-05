import db from "mongoose";

const connStr = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/yoworld?retryWrites=true&w=majority';

db.connect(connStr).then((res) => {
    console.log('Connected to database')
});

const ChatMessageSchema = new db.Schema({
    fromPlayerName: {type: String, required: true},
    fromPlayerId: {type: Number, required: true},
    messageText: {type: String, required: true},
    date: {type: Date, required: true}
});

const ChatMessage = db.model('chat-message', ChatMessageSchema);

const PlayerSchema = new db.Schema({
    playerNames: {type: Array, required: true},
    playerId: {type: Number, required: true}
})

const Player = db.model('player', PlayerSchema);

export default {
    ChatMessage, Player
}