import React from "react";
import { Section } from "../../components/Section";
import WwCards from "../../components/WwCards";
import cardImage1 from "../../assets/working-with/Clear Work Card.png";
import cardImage2 from "../../assets/working-with/Clear Work Card 2.png";
import { Button } from "../../components/Button";

const WorkingWithBalari = () => {
  return (
    <Section align="left">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-h2 font-heading font-bold">
            Why working with Balari feels different
          </h2>
          <p>
            Clear work, thoughtful support, and a process that stays fair from
            the start
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <WwCards
            title="Clear Work"
            description="You should always know what is happening, what is included, and what comes next. No vague handoffs. No guessing game."
            image={cardImage1}
          />
          <WwCards
            title="Quality Partnership"
            description="We care about building working relationships that feel solid, respectful, and worth continuing — not just finishing a project and disappearing."
            image={cardImage2}
          />
          <WwCards
            title="Calm process"
            description="The work stays organized, feedback has a place, and decisions stay easier to make. We do our best to keep things moving without making them feel chaotic."
          />
          <WwCards
            title="Support behind the build"
            description="We do not stop at making things look good. We think about structure, message, and what helps the business keep moving after launch."
          />
        </div>

        <div className="mx-auto">
          <Button size="lg" shadow="sm">Let's talk about your project</Button>
        </div>
      </div>
    </Section>
  );
};

export default WorkingWithBalari;
