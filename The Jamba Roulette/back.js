var myUrl = chrome.runtime.getURL("jamba.html");

function opener() {
    let x = Math.floor((Math.random() * 50) + 1);
    if (x === 5) {
	chrome.tabs.create({
	    url: myUrl
	});
    }
}

chrome.tabs.onCreated.addListener(opener);

