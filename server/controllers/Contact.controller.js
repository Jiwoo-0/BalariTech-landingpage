const resend = require("../config/Resend");

const getContactInfo = (req, res) => {
  res.status(200).json({
    endpoint:    "/api/contact",
    methods:     ["GET", "POST"],
    description: "Use POST with { name, email, message } to submit a message.",
    requiredFields: {
      name:    "string, min 2 chars",
      email:   "valid email address",
      message: "string, min 10 chars",
    },
  });
};

const submitContact = async (req, res) => {
  const {
    name,
    email,
    businessName,
    websiteOrSocial,
    needHelp,
    projectDetails,
    date,
  } = req.body;

  try {
    await resend.emails.send({
      from: "Balari Tech <no-reply@contact.balari.space>",
      to: "tech@balari.space",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Website or Social link:</strong> ${websiteOrSocial || "Not provided"}</p>
        <p><strong>Help they need with:</strong> ${needHelp}</p>
        <p><strong>Date scheduled:</strong> ${date}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error: ", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { getContactInfo, submitContact };
