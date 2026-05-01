const HELP_OPTIONS = [
  "Website build",
  "Landing page or funnel",
  "Growth support",
  "Content Support",
  "Not sure yet",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const trimText = (value) => (typeof value === "string" ? value.trim() : "");

const validateContact = (req, res, next) => {
  const errors = {};

  const contact = {
    name: trimText(req.body?.name),
    email: trimText(req.body?.email),
    businessName: trimText(req.body?.businessName),
    websiteOrSocial: trimText(req.body?.websiteOrSocial),
    needHelp: trimText(req.body?.needHelp),
    projectDetails: trimText(req.body?.projectDetails),
    date: trimText(req.body?.date),
  };

  if (!contact.name) {
    errors.name = "Name is required.";
  } else if (contact.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (contact.name.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  }

  if (!contact.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(contact.email)) {
    errors.email = "Please provide a valid email address.";
  } else if (contact.email.length > 120) {
    errors.email = "Email must be 120 characters or fewer.";
  }

  if (!contact.businessName) {
    errors.businessName = "Business name is required.";
  } else if (contact.businessName.length > 120) {
    errors.businessName = "Business name must be 120 characters or fewer.";
  }

  if (!contact.needHelp) {
    errors.needHelp = "Please choose what you need help with.";
  } else if (!HELP_OPTIONS.includes(contact.needHelp)) {
    errors.needHelp = "Please choose a valid help option.";
  }

  if (!contact.projectDetails) {
    errors.projectDetails = "Project details are required.";
  } else if (contact.projectDetails.length < 20) {
    errors.projectDetails =
      "Project details should be at least 20 characters long.";
  } else if (contact.projectDetails.length > 2000) {
    errors.projectDetails =
      "Project details must be 2000 characters or fewer.";
  }

  if (contact.websiteOrSocial.length > 200) {
    errors.websiteOrSocial =
      "Website or social link must be 200 characters or fewer.";
  }

  if (!contact.date) {
    errors.date = "Please choose a date.";
  } else if (Number.isNaN(Date.parse(contact.date))) {
    errors.date = "Please choose a valid date.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please check your input.",
      errors,
    });
  }

  req.contact = contact;
  return next();
};

module.exports = { validateContact };