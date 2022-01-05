import yoBot from './actions.js';

export default async function sendChatMessage(page, chatMessage) {
    const yoCanvasName = 'iframe_canvas_fb_https';
    await yoBot.doClick(page,356, 544);
    await page.frame({
        name: yoCanvasName
    }).fill('#stage0 textarea', chatMessage, {force: true});
    await page.frame({
        name: yoCanvasName
    }).press('#stage0 textarea', 'Enter');
}


