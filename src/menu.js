export function setMenuContent() {
    let previousContent = document.querySelector("main");

    if (previousContent != null) document.body.removeChild(previousContent);

    const mainContent = document.createElement("main");

    const drinksHeader = document.createElement("h1");
    drinksHeader.textContent = "Drinks";
    const drinksList = document.createElement("ul");

    const budweiser = document.createElement("li");
    budweiser.textContent = "Budweiser";

    const asahiBreweries = document.createElement("li");
    asahiBreweries.textContent = "Asahi";

    const guinness = document.createElement("li");
    guinness.textContent = "Guinness";

    drinksList.appendChild(budweiser);
    drinksList.appendChild(asahiBreweries);
    drinksList.appendChild(guinness);
    mainContent.appendChild(drinksHeader);
    mainContent.appendChild(drinksList);

    const foodsHeader = document.createElement("h1");
    foodsHeader.textContent = "Foods";
    const foodsList = document.createElement("ul");

    const bbq = document.createElement("li");
    bbq.textContent = "barbeque";

    const burger = document.createElement("li");
    burger.textContent = "cheese burger";

    const pizza = document.createElement("li");
    pizza.textContent = "pizza with some pineapple";

    foodsList.appendChild(bbq);
    foodsList.appendChild(burger);
    foodsList.appendChild(pizza);
    mainContent.appendChild(foodsHeader);
    mainContent.appendChild(foodsList);

    document.body.appendChild(mainContent);
}
