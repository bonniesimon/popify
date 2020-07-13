const popBtn = document.querySelector(".pop-btn");

const runExt = () => {
    popBtn.addEventListener("click", () => {
        window.open("https:open.spotify.com", "spotify", "fullscreen=yes");
    });
    getCurrentUrl();
}

//* Function to get Current tab object
const getCurrentTab = () => {
    return browser.tabs.query({currentWindow: true, active:true});
}


//* Function to get current tab url
const getCurrentUrl = () => {
    getCurrentTab().then((tabs) => {
        console.log(tabs[0].url)
        openUrl(tabs[0].url);
    })
}

const openUrl = (url) => {
    window.open(url, "test", "fullscreen=yes");
}

runExt();