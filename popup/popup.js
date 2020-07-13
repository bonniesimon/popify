const popBtn = document.querySelector(".pop-btn");

const runExt = () => {
    popBtn.addEventListener("click", () => {
        window.open("https:open.spotify.com", "spotify", "fullscreen=yes");
    });
    const urlTab = getCurrentUrl();
    console.log(urlTab);
}

//* Function to get Current tab object
const getCurrentTab = () => {
    return browser.tabs.query({currentWindow: true, active:true});
}

//* Function to get current tab url
const getCurrentUrl = () => {
    let urlTab;
    getCurrentTab().then((tabs) => {
        // console.log(tabs[0].url)
        urlTab = tabs[0].url;
    })
    console.log(urlTab);
    return urlTab; 
}

runExt();