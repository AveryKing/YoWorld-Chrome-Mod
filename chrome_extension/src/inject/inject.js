chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

  		// ----------------------------------------------------------
  		// This part of the script triggers when page is done loading
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if(request.command === 'sendChatMessage') {
                    var yoFrame = document.getElementById('iframe_canvas').contentWindow;
                    yoFrame.postMessage('sendChatMessage', '*');
                    sendResponse({action:"chat", data:"it worked!"});
                }
            }
                /*alert(`Received message: ${request.greeting}`)
                if (request.greeting === "hello")
                    sendResponse({farewell: "goodbye"});
            }*/
        );

  	}
	}, 10);
});
