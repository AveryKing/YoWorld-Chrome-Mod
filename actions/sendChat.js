import doClick from './doClick.js';

export default async function sendChat(yoFrame, chatMessage) {
   // console.table(yoFrame);
    await doClick(yoFrame,356, 544);
    await yoFrame.fill('#stage0 textarea', chatMessage, {force: true});
    await yoFrame.press('#stage0 textarea', 'Enter');
}


