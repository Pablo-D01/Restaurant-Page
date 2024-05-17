export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";

  contact.appendChild(contactTitle);
  return contact;
}
