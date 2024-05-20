export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  // Nagłówek
  const welcomeMessage = document.createElement("h1");

  const part1 = document.createElement("span");
  part1.textContent = "QUALITY";

  const part2 = document.createElement("span");
  part2.textContent = "FOODS";
  part2.classList.add("highlight");

  welcomeMessage.appendChild(part1);
  welcomeMessage.appendChild(part2);

  home.appendChild(welcomeMessage);

  // Podtytuł
  const subtitle = document.createElement("p");
  subtitle.textContent = "HEALTHY FOOD FOR HEALTHY BODY";
  home.appendChild(subtitle);

  // pizza
  const pizzaContainer = document.createElement("div");
  pizzaContainer.classList.add("pizza-container");
  const pizzaImage = document.createElement("img");
  pizzaImage.src = require("./assets/pizzza.png"); // Upewnij się, że ścieżka jest poprawna
  pizzaImage.alt = "Pizza";
  pizzaImage.classList.add("pizza-image");
  pizzaContainer.appendChild(pizzaImage);
  home.appendChild(pizzaContainer);

  // Sekcja z ikonami
  const section = document.createElement("div");
  section.classList.add("section");

  const items = [
    {
      icon: "🍕", // Możesz zamienić na rzeczywiste ikony
      title: "DELICIOUS RECIPES",
      description:
        "Discover a world of flavors with our delicious recipes! From gourmet dishes to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds and inspire your inner chef.",
    },
    {
      icon: "🚚",
      title: "DELIVERY OR PICK UP",
      description:
        "Choose your preferred way to enjoy your meal! Opt for hassle-free delivery to your doorstep or take out convenience, allowing you to enjoy culinary delights and satisfy hunger the way you like.",
    },
    {
      icon: "🍽️",
      title: "ORDER YOUR FOOD",
      description:
        "Satisfy your cravings with just a few clicks! Order your favorite dishes from our diverse menu, customized to suit your taste, and enjoy swift delivery or convenient pickup options, making a delightful dining experience right at your fingertips.",
    },
  ];

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.textContent = item.icon;

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = item.title;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    itemDiv.appendChild(icon);
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDescription);

    section.appendChild(itemDiv);
  });

  home.appendChild(section);

  return home;
}
