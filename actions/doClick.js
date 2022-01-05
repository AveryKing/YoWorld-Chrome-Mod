export default async function(page, x, y)  {
    const yoCanvasName = 'iframe_canvas_fb_https';
    await page.frame({
        name: yoCanvasName
    }).click('canvas', {
        position: {
            x: x,
            y: y
        }, force: true
    });
}

