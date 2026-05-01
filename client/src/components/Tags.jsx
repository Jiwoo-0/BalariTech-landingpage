import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const tagVariants = cva(
  "inline-flex items-center rounded-full bg-gray-700 gap-2",
  {
    variants: {
      size: {
        default: "px-4 py-1 text-base",
        sm: "px-3 py-0.5 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export function Tags({ text, size = "default", className = "" }) {
  return (
    <a className={clsx(tagVariants({ size }), className)}>
      <span className="text-primary">⬤</span>
      <p className="m-0">{text}</p>
    </a>
  );
}

export default Tags;
