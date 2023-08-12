import { setHomepageContent } from "./homepage.js";
import { setMenuContent } from "./menu.js";

function setNav() {
    const nav = document.createElement("nav");
    const homepageBtn = document.createElement("button");
    const menuBtn = document.createElement("button");

    homepageBtn.textContent = "Homepage";
    menuBtn.textContent = "Menu";

    homepageBtn.addEventListener("click", () => setHomepageContent());
    menuBtn.addEventListener("click", () => setMenuContent());

    nav.appendChild(homepageBtn);
    nav.appendChild(menuBtn);

    const mainContent = document.querySelector("main");
    document.body.insertBefore(nav, mainContent);
}

setNav();
setHomepageContent();
