import doClick from './do_click.js';

 async function createEvent (yoFrame, eventName, eventDescription) {
    await doClick(yoFrame,422, 593);
    await doClick(yoFrame,539, 499);
    await doClick(yoFrame,353, 214);

    await yoFrame.fill('#stage0 textarea', eventName, {force: true});

    await doClick(yoFrame,375, 279);

    await yoFrame.fill('#stage0 textarea', eventDescription, {force: true});
    await doClick(yoFrame,457, 167);
    await doClick(yoFrame,382, 211);
    await doClick(yoFrame,458, 367);
    await doClick(yoFrame,419, 407);
    await doClick(page,461, 455);
}

export default createEvent;