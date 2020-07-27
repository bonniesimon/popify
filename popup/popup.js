const popBtn = document.querySelector(".pop-btn");

const main= () => {
    popBtn.addEventListener("click",() => {
        var newWindow = window.open("", "popup", "fullscreen=yes"); 
        getCurrentUrl().then((tab) => {
            newWindow.location.href = tab.url;
            newWindow.document.title = tab.title;
            console.log(tab);
            closeTab(tab.id);
        })
    });
}

const closeTab = (tabId) => {
    return browser.tabs.remove(tabId);
}

const getTab = async (tab) => {
    tab =   await getCurrentUrl();
    return tab; 
}

//* Function to get Current tab object
const getCurrentTab = () => {
    return browser.tabs.query({ currentWindow: true, active: true });
}

//* Function to get current tab url
const getCurrentUrl = () => {
    return getCurrentTab().then((tabs) => {
        return tabs[0];
    })
}


main();