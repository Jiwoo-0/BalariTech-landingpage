import React from "react";
import { Section } from "../../components/Section";
import { SelectedWorkCards } from "../../components/SelectedWorkCards";

const selectedWorks = [
  {
    image: "a",
    projectName: "NetBinge",
    type: "Streaming site",
    tags: ["tag 1", "tag 2", "tag 3"],
    goal: "A small project to test our skills creating a standalone streaming site",
    href: "#",
  },
  {
    image: "a",
    projectName: "NetBinge",
    type: "Streaming site",
    tags: ["tag 1", "tag 2", "tag 3"],
    goal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero beatae quod labore amet ducimus eligendi omnis expedita veniam sed?",
    href: "#",
  },
]


const SelectedWork = () => {
  return (
    <Section bg="default">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-h2 font-heading font-bold">
            Selected Work
          </h2>
          <p>
            A few projects and capabilities we’re building with care. More work will be added here over time.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {selectedWorks.map((selectedWork, index)=>(
            <SelectedWorkCards key={index} {...selectedWork}/>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SelectedWork;
