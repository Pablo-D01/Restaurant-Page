export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const header = document.createElement("h1");
  header.textContent = "Order here";
  header.classList.add("contact-header");
  contact.appendChild(header);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const phone = document.createElement("p");
  phone.textContent = "Phone: +48 123 456 789";
  contactInfo.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: contact@example.com";
  contactInfo.appendChild(email);

  contact.appendChild(contactInfo);

  return contact;
}
