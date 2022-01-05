import gameActions from './actions.js';

 async function createEvent (page, eventName, eventDescription) {
    const yoCanvasName = 'iframe_canvas_fb_https';
    await gameActions.doClick(page,422, 593);
    await gameActions.doClick(page,539, 499);
    await gameActions.doClick(page,353, 214);

    await page.frame({
        name: yoCanvasName
    }).fill('#stage0 textarea', eventName, {force: true});

    await gameActions.doClick(page,375, 279);

    await page.frame({
        name: yoCanvasName
    }).fill('#stage0 textarea', eventDescription, {force: true});
    await gameActions.doClick(page,457, 167);
    await gameActions.doClick(page,382, 211);
    await gameActions.doClick(page,458, 367);
    await gameActions.doClick(page,419, 407);
    await gameActions.doClick(page,461, 455);
}

export default createEvent;