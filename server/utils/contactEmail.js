const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatOptional = (value) => (value ? escapeHtml(value) : "Not provided");

const buildContactEmailHtml = (contact) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
    <h2>New Balari contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
    <p><strong>Business name:</strong> ${escapeHtml(contact.businessName)}</p>
    <p><strong>Website or social link:</strong> ${formatOptional(contact.websiteOrSocial)}</p>
    <p><strong>What they need help with:</strong> ${escapeHtml(contact.needHelp)}</p>
    <p><strong>Preferred date:</strong> ${escapeHtml(contact.date)}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(contact.projectDetails).replaceAll("\n", "<br />")}</p>
  </div>
`;

const buildContactEmailText = (contact) => `
New Balari contact form submission

Name: ${contact.name}
Email: ${contact.email}
Business name: ${contact.businessName}
Website or social link: ${contact.websiteOrSocial || "Not provided"}
What they need help with: ${contact.needHelp}
Preferred date: ${contact.date}

Project details:
${contact.projectDetails}
`.trim();

module.exports = {
  buildContactEmailHtml,
  buildContactEmailText,
};