export function setMenuContent() {
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = "";

    const drinksList = document.createElement("ul");
    drinksList.textContent = "Drinks";

    const budweiser = document.createElement("li");
    budweiser.textContent = "Budweiser";

    const asahiBreweries = document.createElement("li");
    asahiBreweries.textContent = "Asahi";

    const guinness = document.createElement("li");
    guinness.textContent = "Guinness";

    drinksList.appendChild(budweiser);
    drinksList.appendChild(asahiBreweries);
    drinksList.appendChild(guinness);
    mainContent.appendChild(drinksList);

    const foodsList = document.createElement("ul");
    foodsList.textContent = "Foods";

    const bbq = document.createElement("li");
    bbq.textContent = "barbeque";

    const burger = document.createElement("li");
    burger.textContent = "cheese burger";

    const pizza = document.createElement("li");
    pizza.textContent = "pizza with some pineapple";

    foodsList.appendChild(bbq);
    foodsList.appendChild(burger);
    foodsList.appendChild(pizza);
    mainContent.appendChild(foodsList);
}
