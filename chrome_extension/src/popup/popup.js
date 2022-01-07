document.getElementById("controlBtn").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: "sendChatMessage", message:'text'}, function(response) {

        });
    });
});
