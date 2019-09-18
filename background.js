
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var tabID = tabs[0].id;
        
        //closes current tab 
        chrome.tabs.remove(tabID);
        
        if(!tab.incognito){
            //create incognito window
            chrome.windows.create({
                url: url,
                incognito: true
            });

            chrome.history.deleteUrl({
                url: tabs[0].url,
            });
        }

        else{
            chrome.windows.create({
                url: url,
                incognito: false
            });
        }



    });
 });