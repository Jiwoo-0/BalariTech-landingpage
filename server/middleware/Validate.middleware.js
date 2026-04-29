const validateContact = (req, res, next) => {
  const { name, email, businessName, needHelp, projectDetails, date } = req.body;
  const errors = {};

  // NAME
  if (!name || typeof name !== "string" || !name.trim()) {
    errors.name = "Name is required.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // EMAIL
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  // BUSINESS NAME
  if (!businessName || typeof businessName !== "string" || !businessName.trim()) {
    errors.businessName = "Business name is required.";
  }

  // NEED HELP
  if (!needHelp || typeof needHelp !== "string" || !needHelp.trim()) {
    errors.needHelp = "Please select what you need help with.";
  }

  // PROJECT DETAILS
  if (!projectDetails || typeof projectDetails !== "string" || !projectDetails.trim()) {
    errors.projectDetails = "Project details are required.";
  }

  // DATE
  if (!date) {
    errors.date = "Please select a date.";
  }

  // If there are errors, return them
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please check your input.",
      errors,
    });
  }

  // Continue to next middleware
  next();
};

module.exports = { validateContact };