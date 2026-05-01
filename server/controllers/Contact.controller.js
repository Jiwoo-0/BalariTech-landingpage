const resend = require("../config/resend");
const {
  buildContactEmailHtml,
  buildContactEmailText,
} = require("../utils/contactEmail");

const submitContact = async (req, res) => {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = (process.env.RESEND_TO_EMAIL || "")
    .split(",")
    .map((email)=>email.trim())
    .filter(Boolean);

  if (!resend || !fromEmail || !toEmail) {
    return res.status(500).json({
      success: false,
      message:
        "Server email settings are incomplete. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and RESEND_TO_EMAIL.",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: req.contact.email,
      subject: `New Balari contact form submission from ${req.contact.name}`,
      html: buildContactEmailHtml(req.contact),
      text: buildContactEmailText(req.contact),
    });

    if (error) {
      console.error("Resend API error:", error);

      return res.status(502).json({
        success: false,
        message: "We couldn't send your message right now. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
};

module.exports = { submitContact };