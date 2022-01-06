import yoBot from './YoBot.js';

export default async function do_click(yoFrame, x, y)  {
    await yoFrame.click('canvas', {
        position: {
            x: x,
            y: y
        }, force: true
    });
}
