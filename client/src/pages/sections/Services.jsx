import React from "react";
import { Section } from "../../components/Section";
import { ServiceCard } from "../../components/ServiceCard";
import service1 from "../../assets/services-section/Frame 71.png"
import service2 from "../../assets/services-section/Frame 72.png"
import service4 from "../../assets/services-section/Frame 74.png"

const services = [
  {
    number: "01",
    title: "Website Builds",
    subtitle: "A clear, credible online home for your business.",
    description: "For businesses that need a website that feels aligned, easy to understand, and ready to support what comes next.",
    includes: ["UX/UI direction", "website design and build", "mobile responsiveness", "foundational SEO setup", "launch support"],
    buttonText: "Ask about website builds",
    imageSrc: service1,
    reverse: false
  },
  {
    number: "02",
    title: "Landing Pages + Funnels",
    subtitle: "A cleaner path from attention to inquiry.",
    description: "For offers, campaigns, and focused conversion goals that need a dedicated page and stronger structure behind the journey.",
    includes: ["landing page strategy and layout", "conversion-focused structure", "forms and next-step flow", "tracking setup", "optional funnel support"],
    buttonText: "Ask about landing pages",
    imageSrc: service2,
    reverse: true
  },
  {
    number: "03",
    title: "Launch / Growth Support",
    subtitle: "Ongoing support that helps the business keep moving after launch.",
    description: "For businesses that need help refining, improving, and building on what is already there — without starting from scratch every time.",
    includes: ["website updates", "funnel and content support", "email and marketing support", "reporting rhythm", "ongoing recommendations"],
    buttonText: "Ask about growth support",
    imageSrc: service1,
    reverse: false
  },
  {
    number: "04",
    title: "Content Support",
    subtitle: "Creative support that stays aligned with the brand and message.",
    description: "For businesses that need visual, audio, or content execution that actually fits the direction of the business.",
    includes: ["video editing", "audio editing", "graphic support", "light content support", "brand-aligned creative assets"],
    buttonText: "Ask about website builds",
    imageSrc: service4,
    reverse: true
  }
];

const Services = () => {
  return (
    <Section bg="secondary" align="left" id="services">
      <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-h2 font-heading font-bold">
            What we can help with
          </h2>
          <p>
            Start with what your business needs now. Build from there with the
            right support behind it.
          </p>
        </div>
        <div className="flex flex-col gap-32">
            {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
            ))}

        </div>
      </div>
    </Section>
  );
};

export default Services;
