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

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <FormInput
              type="text"
              name="businessName"
              placeholder="Business name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />

            <FormInput
              type="text"
              name="websiteOrSocial"
              placeholder="Website or social link"
              value={formData.websiteOrSocial}
              onChange={handleChange}
            />

            <FormInput
              type="select"
              name="needHelp"
              placeholder="What do you need help with?"
              value={formData.needHelp}
              onChange={handleChange}
              options={helpOptions}
              required
            />

            <FormInput
              type="textarea"
              name="projectDetails"
              placeholder="Tell us about your project and what you're looking to achieve"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="5"
            />

            <FormInput
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <Button className="w-full" variant="primary" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
