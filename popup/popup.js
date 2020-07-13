const popBtn = document.querySelector(".pop-btn");

const runExt = () => {
    popBtn.addEventListener("click", () => {
        getCurrentUrl();
    });
}

//* Function to get Current tab object
const getCurrentTab = () => {
    return browser.tabs.query({currentWindow: true, active:true});
}


//* Function to get current tab url
const getCurrentUrl = () => {
    getCurrentTab().then((tabs) => {
        console.log(tabs[0].url);
        openUrl(tabs[0].url, tabs[0].title);
    })
}

const openUrl = (url, title) => {
    console.log(window.open(url, title, "fullscreen=yes"))
    window.open(url, title, "fullscreen=yes");
}

runExt();