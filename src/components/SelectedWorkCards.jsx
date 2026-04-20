import React from "react";
import Tags from "./Tags";
import { Button } from "./button";

export const SelectedWorkCards = ({
  image,
  projectName,
  type,
  tags,
  goal,
  href,
}) => {
  return (
    <div className="bg-secondary rounded-xl p-4 flex flex-col gap-4 text-white h-full">
      <div className="w-full h-80 border bg-gray-300 border-white/10 rounded-lg"></div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-heading text-h3 font-bold">{projectName}</h3>
          <h4 className="font-heading text-h4 font-bold">{type}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tags key={index} text={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <p className="font-bold">Goal</p>
        <p className="flex-1">{goal}</p>
        <Button className="w-full" href={href}>See Preview</Button>
      </div>
    </div>
  );
};
