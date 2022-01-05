import yoBot from './actions.js';

 async function createEvent (page, eventName, eventDescription) {
    const yoCanvasName = 'iframe_canvas_fb_https';
    await yoBot.doClick(page,422, 593);
    await yoBot.doClick(page,539, 499);
    await yoBot.doClick(page,353, 214);

    await page.frame({
        name: yoCanvasName
    }).fill('#stage0 textarea', eventName, {force: true});

    await yoBot.doClick(page,375, 279);

    await page.frame({
        name: yoCanvasName
    }).fill('#stage0 textarea', eventDescription, {force: true});
    await yoBot.doClick(page,457, 167);
    await yoBot.doClick(page,382, 211);
    await yoBot.doClick(page,458, 367);
    await yoBot.doClick(page,419, 407);
    await yoBot.doClick(page,461, 455);
}

export default createEvent;