import RestaurantImage from "./restaurant.jpg";

export function setHomepageContent() {
    let previousContent = document.querySelector("main");

    if (previousContent != null) document.body.removeChild(previousContent);

    const mainContent = document.createElement("main");

    const h1 = document.createElement("h1");
    h1.textContent = "A restaurant title";

    const image = new Image();
    image.src = RestaurantImage;
    image.width = 300;

    const paragraph = document.createElement("p");
    paragraph.textContent = "Soft jazz at night, great food, reasonable prize, what not to love?";

    mainContent.appendChild(h1);
    mainContent.appendChild(image);
    mainContent.appendChild(paragraph);
    document.body.appendChild(mainContent);
}
