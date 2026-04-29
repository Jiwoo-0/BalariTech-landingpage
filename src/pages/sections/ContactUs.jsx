import React, { useState } from "react";
import { Section } from "../../components/Section";
import { Button } from "../../components/button";
import { FormInput } from "../../components/FormInput";

const helpOptions = [
  "Website build",
  "Landing page or funnel",
  "Growth support",
  "Content Support",
  "Not sure yet",
];

const initialFormData = {
  name: "",
  email: "",
  businessName: "",
  websiteOrSocial: "",
  needHelp: "",
  projectDetails: "",
  date: "",
};

const initialErrors = {
  name: "",
  email: "",
  businessName: "",
  websiteOrSocial: "",
  needHelp: "",
  projectDetails: "",
  date: "",
};

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data) => {
  const newErrors = { ...initialErrors };
  let isValid = true;

  // Required field validation
  if (!data.name.trim()) {
    newErrors.name = "Name is required";
    isValid = false;
  }

  if (!data.email.trim()) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(data.email)) {
    newErrors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!data.businessName.trim()) {
    newErrors.businessName = "Business name is required";
    isValid = false;
  }

  if (!data.needHelp.trim()) {
    newErrors.needHelp = "Please select an option";
    isValid = false;
  }

  if (!data.projectDetails.trim()) {
    newErrors.projectDetails = "Please tell us about your project";
    isValid = false;
  }

  if (!data.date) {
    newErrors.date = "Please select a date";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    // Validate form
    const { isValid, errors: validationErrors } = validateForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Your message has been sent successfully! We'll get back to you soon.",
        });
        setFormData(initialFormData);
        setErrors(initialErrors);
      } else {
        setSubmitMessage({
          type: "error",
          text: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Section bg="secondary" id="contact">
      <div className="flex gap-8">
        <div className="flex flex-col gap-7 w-full max-w-2xl">
          <div>
            <h2 className="font-heading font-bold text-h2 text-white">
              Can't find what you're looking for?
            </h2>
            <p className="text-white/80">
              Tell us a little about your business and what you need help with.
              We'll get back to you with the clearest next step we can.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {submitMessage.text && (
              <div
                className={`p-4 rounded-lg ${
                  submitMessage.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-100"
                    : "bg-red-500/20 border border-red-500/50 text-red-100"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <FormInput
              type="text"
              name="businessName"
              placeholder="Business name"
              value={formData.businessName}
              onChange={handleChange}
              error={errors.businessName}
            />

            <FormInput
              type="text"
              name="websiteOrSocial"
              placeholder="Website or social link (optional)"
              value={formData.websiteOrSocial}
              onChange={handleChange}
              error={errors.websiteOrSocial}
            />

            <FormInput
              type="select"
              name="needHelp"
              placeholder="What do you need help with?"
              value={formData.needHelp}
              onChange={handleChange}
              options={helpOptions}
              error={errors.needHelp}
            />

            <FormInput
              type="textarea"
              name="projectDetails"
              placeholder="Tell us about your project and what you're looking to achieve"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="5"
              error={errors.projectDetails}
            />

            <FormInput
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
            />

            <Button
              className="w-full"
              variant="primary"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
