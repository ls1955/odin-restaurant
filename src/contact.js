export function setContactContent() {
    const h1 = document.createElement("h1");
    h1.textContent = "Contacts";

    const mainContent = document.querySelector("main");
    mainContent.innerHTML = "";

    const contactsList = document.createElement("ul");

    const ownerContact = document.createElement("li");
    ownerContact.textContent = "Jim the owner: 012-3571113";

    const managerContact = document.createElement("li");
    managerContact.textContent = "Timmy the manager: 012-3456789";

    contactsList.appendChild(ownerContact);
    contactsList.appendChild(managerContact);
    mainContent.appendChild(h1);
    mainContent.appendChild(contactsList)
}
