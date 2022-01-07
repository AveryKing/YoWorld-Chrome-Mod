// This code is injected into the DOM
chrome.runtime.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            chrome.runtime.onMessage.addListener(
                function (yoPayload, sender, sendResponse) {
                    let yo = document.getElementById('iframe_canvas').contentWindow;
                    yo.postMessage(yoPayload, '*')
                    return true;
                }
            );
            window.onmessage = function (yoResponse) {
                console.table(yoResponse)
                chrome.runtime.sendMessage(yoResponse.data);
            }
        }
    }, 10);
});
