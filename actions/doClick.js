export default async function doClick(page, x, y)  {
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
