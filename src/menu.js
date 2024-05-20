export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // Utwórz nagłówek
  const header = document.createElement("h1");
  header.textContent = "Our Menu";
  header.classList.add("menu-header");
  menu.appendChild(header);

  // Kontener PDF
  const pdfContainer = document.createElement("div");
  pdfContainer.classList.add("pdf-container");

  const iframe = document.createElement("iframe");
  iframe.src = require("./assets/menu.pdf");
  iframe.classList.add("pdf-iframe");

  pdfContainer.appendChild(iframe);
  menu.appendChild(pdfContainer);

  return menu;
}
