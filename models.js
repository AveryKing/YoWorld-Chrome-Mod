const db = require('mongoose');

const ChatMessageSchema = new db.Schema({
    fromPlayerName: {type: String, required: true},
    fromPlayerId: {type: Number, required: true},
    messageText: {type: String, required: true},
    date: {type: Date, required: true}
});

const ChatMessage = db.model('Chat-Message', ChatMessageSchema);
/*
const PlayerSchema = new db.Schema({
    playerNames: {type: Set, required: true},
    playerId: {type: Number, required: true}
})

await models.Player.find({playerId: data.fromPlayerId})
            .then(player => {
                if(!player) {
                    let playerNames = []
                    playerNames.push(data.fromPlayerName);
                    player = new models.Player({
                        playerNames: playerNames,
                        playerId: data.fromPlayerId
                    })
                     player.save().then(res => {
                         console.log(res)
                     })
                }
            })
*/
module.exports =  {
    ChatMessage
}