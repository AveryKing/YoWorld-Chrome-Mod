import do_click from './do_click.js';

 async function create_event (yoFrame, eventName, eventDescription) {
    await do_click(yoFrame,422, 593);
    await do_click(yoFrame,539, 499);
    await do_click(yoFrame,353, 214);

    await yoFrame.fill('#stage0 textarea', eventName, {force: true});

    await do_click(yoFrame,375, 279);

    await yoFrame.fill('#stage0 textarea', eventDescription, {force: true});
    await do_click(yoFrame,457, 167);
    await do_click(yoFrame,382, 211);
    await do_click(yoFrame,458, 367);
    await do_click(yoFrame,419, 407);
    await do_click(page,461, 455);
}

export default create_event;