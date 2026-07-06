const FORM_EMAIL = "foretagsservice4.jarfalla@bauhaus.se";

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    statusText.textContent = "Fyll i namn, e-mail, ämne och meddelande.";
    return;
  }

  const mailSubject = `${subject} - ${name}${company ? " / " + company : ""}`;
  const mailBody = [
    `Namn: ${name}`,
    company ? `Företag: ${company}` : "Företag: Ej angivet",
    `E-mail: ${email}`,
    phone ? `Telefon: ${phone}` : "Telefon: Ej angivet",
    "",
    "Meddelande:",
    message
  ].join("\n");

  const mailtoLink = `mailto:${FORM_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  statusText.textContent = "Mailprogrammet öppnas. Kontrollera texten och skicka.";
  window.location.href = mailtoLink;
});
