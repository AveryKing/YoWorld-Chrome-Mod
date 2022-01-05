const mongoose = require('mongoose');
const pw = require('./playwright')
const yoLogger = require('./logger');
const connStr = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/yoworld?retryWrites=true&w=majority';

mongoose.connect(connStr).then((res) => {
    console.log('Connected to database')
});

(async () => {
    const page = await pw.launch();
    page.on('console', async msg => {
        try {
            const {cmd, data} = JSON.parse(msg.text());
            switch(cmd) {
                case 'logChatMessage':
                    await yoLogger.logChatMessage(data);
                    break;
            }
        } catch(e) {}
    })

})();