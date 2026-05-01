import React from "react";
import { Section } from "../../components/Section";
import { RoadmapCard } from "../../components/RoadmapCards";

const roadmaps = [
    {
        title: "Launch",
        bestFor: "Getting your business online clearly",
        copy: (<>A good fit if you need a website, landing page, or digital front door that feels credible, clear, and ready to launch.<br/></>),
        focus: ["offer clarity", "page structure", "website or landing page build", "launch readiness", "tracking and SEO foundations"],
        buttonText: "Start with launch",
        color: "secondary"
    },
    {
        title: "Growth",
        bestFor: "Building more consistency after the initial setup",
        copy: "A good fit if the business already has some pieces in place, but needs a clearer system, better follow-through, or support that keeps things moving.",
        focus: ["funnel improvements", "email support", "content support", "refinement cycles", "stronger inquiry flow"],
        buttonText: "Explore Growth",
        color: "accent"
    },
    {
        title: "Partner",
        bestFor: "Ongoing support and long-term collaboration",
        copy: "A good fit if you want a team that can stay involved, support improvements over time, and keep helping the business grow in a more structured way.",
        focus: ["ongoing website support", "content and creative support", "monthly reviews", "updates and improvements", "longer-term planning"],
        buttonText: "Ask about Partnership",
        color: "primary"
    },
];

const Roadmap = () => {
  return (
    <Section bg="default" align="left" id="roadmap">
      <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-h2 font-heading font-bold">
            Start where you are. Build from there
          </h2>
          <p>
            Balari Tech is designed to support both one-off projects and
            longer-term partnerships.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-4">
          {roadmaps.map((roadmap, index)=> (
            <RoadmapCard key={index} {...roadmap}/>
          ))}
        </div>
        <div>
            <p className="text-center">You can start with one project and still grow into something longer-term. We want the next step to make sense for your stage.</p>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
