export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our Menu";

  menu.appendChild(menuTitle);
  return menu;
}
