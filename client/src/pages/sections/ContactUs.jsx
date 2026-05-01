import React, { useState } from "react";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

const helpOptions = [
  "Website build",
  "Landing page or funnel",
  "Growth support",
  "Content Support",
  "Not sure yet",
];

const createInitialFormData = () => ({
  name: "",
  email: "",
  businessName: "",
  websiteOrSocial: "",
  needHelp: "",
  projectDetails: "",
  date: "",
  companyWebsite: "",
  startedAt: new Date().toISOString(),
});

const initialErrors = {
  name: "",
  email: "",
  businessName: "",
  websiteOrSocial: "",
  needHelp: "",
  projectDetails: "",
  date: "",
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data) => {
  const newErrors = { ...initialErrors };
  let isValid = true;

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
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    const { isValid, errors: validationErrors } = validateForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
        setFormData(createInitialFormData());
        setErrors(initialErrors);
        return;
      }

      if (data.errors) {
        setErrors((prev) => ({ ...prev, ...data.errors }));
      }

      setSubmitMessage({
        type: "error",
        text: data.error || data.message || "Something went wrong. Please try again.",
      });
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
        <div className="flex w-full max-w-2xl flex-col gap-7">
          <div>
            <h2 className="font-heading text-h2 font-bold text-white">
              Can't find what you're looking for?
            </h2>
            <p className="text-white/80">
              Tell us a little about your business and what you need help with.
              We'll get back to you with the clearest next step we can.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="companyWebsite">Leave this blank</label>
              <input
                id="companyWebsite"
                type="text"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {submitMessage.text && (
              <div
                className={`rounded-lg border p-4 ${
                  submitMessage.type === "success"
                    ? "border-green-500/50 bg-green-500/20 text-green-100"
                    : "border-red-500/50 bg-red-500/20 text-red-100"
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
              rows={5}
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
