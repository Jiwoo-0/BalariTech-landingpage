import React from "react";
import { Section } from "../../components/Section";
import { WorkCards } from "../../components/WorkCards";
import workIcon1 from "../../assets/work/search-2-line.svg";
import workIcon2 from "../../assets/work/compass-line.svg";
import workIcon3 from "../../assets/work/stack-line.svg";
import workIcon4 from "../../assets/work/rocket-2-line.svg";
import workIcon5 from "../../assets/work/shield-check-line.svg";

const works = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We start by understanding the business, the offer, the goals, and what feels most important right now.",
    icon: workIcon1,
  },
  {
    number: "2",
    title: "Direction",
    description:
      "We shape the structure, message, and scope so the project has a clearer path from the beginning.",
    icon: workIcon2,
  },
  {
    number: "3",
    title: "Build",
    description:
      "We design, refine, and build with both the experience and the bigger picture in mind.",
    icon: workIcon3,
  },
  {
    number: "4",
    title: "Launch",
    description:
      "We check the details, support the rollout, and make sure the business has something it can actually build from.",
    icon: workIcon4,
  },
  {
    number: "5",
    title: "Support",
    description:
      "If ongoing support makes sense, we keep going with the right next layer — not more than needed, not less than helpful.",
    icon: workIcon5,
  },
];

const Work = () => {
  return (
    <Section bg="muted" align="left" id="work">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-h2 font-heading font-bold">How We Work</h2>
          <p>Simple, organized, and easier to follow.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {works.map((work, index) => (
            <WorkCards key={index} {...work} />
          ))}
        </div>
        <div className="text-center">
          <p>
            Clear work. Thoughtful process. Quality partnership.</p>
        </div>
      </div>
    </Section>
  );
};

export default Work;
