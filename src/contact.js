export function setContactContent() {
    let previousContent = document.querySelector("main");

    if (previousContent != null) document.body.removeChild(previousContent);

    const mainContent = document.createElement("main");

    const h1 = document.createElement("h1");
    h1.textContent = "Contacts";

    const contactsList = document.createElement("ul");

    const ownerContact = document.createElement("li");
    ownerContact.textContent = "Jim the owner: 012-3571113";

    const managerContact = document.createElement("li");
    managerContact.textContent = "Timmy the manager: 012-3456789";

    contactsList.appendChild(ownerContact);
    contactsList.appendChild(managerContact);
    mainContent.appendChild(h1);
    mainContent.appendChild(contactsList);
    document.body.appendChild(mainContent);
}
