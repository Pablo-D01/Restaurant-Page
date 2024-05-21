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
  addTiltEffect();
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
  contactButton.textContent = "Order";
  contactButton.addEventListener("click", () => loadPage("contact"));

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  document.body.insertBefore(nav, document.getElementById("content"));
}

function addTiltEffect() {
  const section = document.querySelector(".pizza-image");

  if (section) {
    section.addEventListener("mousemove", (event) => {
      const { offsetWidth: width, offsetHeight: height } = section;
      const { offsetX: x, offsetY: y } = event;
      const moveX = (x / width) * 30 - 15;
      const moveY = (y / height) * 30 - 15;

      section.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    });

    section.addEventListener("mouseleave", () => {
      section.style.transform = "rotateX(0) rotateY(0)";
    });
  }
}

createNav();
loadPage("home");
addTiltEffect();
