import React from "react";
import { Section } from "../../components/Section";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";

const Story = () => {
  return (
    <Section bg="muted" align="left">
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 justify-center">
          <h2 className="font-heading text-h2 font-bold"> Why</h2>
          <img src={logo} className="w-36" />
          <h2 className="font-heading text-h2 font-bold">exists</h2>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full h-full md:w-[60%]">
            <div className="sticky w-full h-96 bg-black/5 rounded-lg border border-black/20 flex items-center justify-center">
              <p>Our Story Video Coming Soon...</p>
            </div>
          </div>
          <div className="w-full justify-start flex flex-col gap-8 md:w-[40%]">
            <h3 className="font-heading text-h3 text-center md:text-start">
              Built from the belief that good work should feel clear and fair.
            </h3>
            <p>
              We started Balari Tech because we kept seeing businesses work hard
              and still end up with a digital presence that felt scattered,
              unclear, or difficult to build from.
              <br /><br />
              Sometimes the website looked fine, but nothing around it felt
              connected. Sometimes the marketing was active, but there was no
              clear system behind it. Sometimes the process itself felt harder
              than it needed to be.
              <br /><br />
              Balari Tech was built to make that feel different. 
              <br /><br />
              We bring together building and marketing in one founder-led team, so the
              work stays more aligned from the start — from structure and
              message to launch and next steps.
            </p>
            <Button>Book a free consult</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Story;
