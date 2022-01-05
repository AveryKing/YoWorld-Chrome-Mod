import doClick from './doClick.js';

export default async function sendChat(yoFrame, chatMessage) {
    await doClick(yoFrame,356, 544);
    await yoFrame.fill('#stage0 textarea', chatMessage, {force: true});
    await yoFrame.press('#stage0 textarea', 'Enter');
}


