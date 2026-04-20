import React from "react";
import { Section } from "../../components/Section";
import { Button } from "../../components/button";
import logo from "../../assets/icons/Brandmark.svg"

const CTA = () => {
  return (
    <Section bg="primary" align="right" className="relative overflow-hidden">
      <img 
        src={logo} 
        aria-hidden="true" 
        className="absolute inset-0 -left-80 w-[80rem] pointer-events-none"
      />
      <div className="relative flex justify-end text-white">
        <div className="w-[45%] flex flex-col gap-4">
          <h2 className="text-h2 font-heading font-bold">
            Let’s build the right next step for your business.
          </h2>
          <p>
            Whether you need a clearer website, a landing page, ongoing support,
            or help figuring out what makes the most sense first, we’d love to
            hear where you’re at.
          </p>
          <Button variant="secondary" size="lg">
            Let's talk about your project
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
