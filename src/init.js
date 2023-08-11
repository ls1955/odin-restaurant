import RestaurantImage from "./restaurant.jpg";

export function initWebpage() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "A restaurant title";
    header.appendChild(h1);

    const mainContent = document.querySelector("main");
    const image = new Image();
    image.src = RestaurantImage;
    image.width = 300;
    const paragraphOne = document.createElement("p");
    paragraphOne.textContent = "This is a great restaurant. The food is nice, and the price is reasonable.";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.textContent = "They also play some soft jazz at night, sounds good eh?";

    document.body.insertBefore(header, mainContent);
    mainContent.appendChild(image);
    mainContent.appendChild(paragraphOne);
    mainContent.appendChild(paragraphTwo);
}
