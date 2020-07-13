const popBtn = document.querySelector(".pop-btn");

const runExt = () => {
    popBtn.addEventListener("click", () => {
        window.open("https:open.spotify.com", "spotify", "fullscreen=yes");
    });
    browser.tabs.query({currentWindow: true, active:true}, logTabs);
}

const logTabs = (tabs) => {
    console.log(tabs[0].url);
}

// const getCurrentTab = () => {

// }

runExt();