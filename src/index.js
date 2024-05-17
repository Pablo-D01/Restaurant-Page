import "./style.css";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function loadPage(page) {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Czyść zawartość przed załadowaniem nowej sekcji

  switch (page) {
    case "home":
      content.appendChild(createHome());
      break;
    case "menu":
      content.appendChild(createMenu());
      break;
    case "contact":
      content.appendChild(createContact());
      break;
    default:
      content.appendChild(createHome());
  }
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => loadPage("home"));

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", () => loadPage("menu"));

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => loadPage("contact"));

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  document.body.insertBefore(nav, document.getElementById("content"));
}

createNav();
loadPage("home");
