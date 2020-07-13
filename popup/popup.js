const popBtn = document.querySelector(".pop-btn");

const runExt = () => {
    popBtn.addEventListener("click", () => {
        window.open("https:open.spotify.com", "spotify", "fullscreen=yes");
    });
}


runExt();