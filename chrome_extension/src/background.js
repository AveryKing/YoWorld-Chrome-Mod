/*
chrome.runtime.onMessage.addListener(({ action, data }, sender, sendResponse) => {
  /* if (action === 'inject') {
        chrome.tabs.executeScript(sender.tab.id, {
            code: getInjectionCode(data),
            frameId: sender.frameId,
        });
    }
    if(action === 'chat') {
        console.log('chat message sent');
    }
});*/