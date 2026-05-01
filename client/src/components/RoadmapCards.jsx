import React from "react";
import { Button } from "./Button";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const cardVariants = cva("", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
    },
  },
});

export function RoadmapCard({
  title,
  bestFor,
  copy,
  focus,
  buttonText,
  color,
}) {
  return (
    <div className="border rounded-xl overflow-hidden flex flex-col gap-7">
      <div className={clsx("text-center pt-16 pb-7", cardVariants({ color }))}>
        <h3 className="text-white font-heading text-h3 font-bold">{title}</h3>
      </div>
      <div className="px-10 flex flex-col gap-4">
        <div>
          <h4 className="font-heading text-h4 font-medium">Best for</h4>
          <p>{bestFor}</p>
        </div>
        <div>
          <h4 className="font-heading text-h4 font-medium">Copy</h4>
          <p>{copy}</p>
        </div>
        <div>
          <h4 className="font-heading text-h4 font-medium">Focus</h4>
          <ul className="list-disc pl-4">
            {focus.map((item, idx) => (
              <li key={idx}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-10 py-4 text-center">
        <Button className="w-full">{buttonText}</Button>
      </div>
    </div>
  );
}
