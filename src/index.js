import { setHomepageContent } from "./homepage.js";
import { setMenuContent } from "./menu.js";

function setNav() {
    const nav = document.createElement("nav");
    const homepageBtn = document.createElement("button");
    homepageBtn.textContent = "Homepage"

    nav.appendChild(homepageBtn);
    const mainContent = document.querySelector("main");
    document.body.insertBefore(nav, mainContent);
}

setNav();
setHomepageContent();
