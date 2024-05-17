export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to Our Restaurant!";

  home.appendChild(welcomeMessage);
  return home;
}
