import { setContactContent } from "./contact.js";
import { setHomepageContent } from "./homepage.js";
import { setMenuContent } from "./menu.js";

function setNav() {
    const nav = document.createElement("nav");
    const homepageBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homepageBtn.textContent = "Homepage";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    homepageBtn.addEventListener("click", () => setHomepageContent());
    menuBtn.addEventListener("click", () => setMenuContent());
    contactBtn.addEventListener("click", () => setContactContent());

    nav.appendChild(homepageBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    document.body.appendChild(nav);
}

setNav();
setHomepageContent();
