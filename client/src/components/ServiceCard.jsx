import React from "react";
import Tags from "./Tags";
import { Button } from "./Button";

export function ServiceCard({
  number,
  title,
  subtitle,
  description,
  includes,
  buttonText,
  imageSrc,
  reverse = false,
}) {
  const content = (
    <div className="flex flex-col gap-8">
      <h4 className="text-primary font-heading font-bold text-h4">{number}</h4>
      <div>
        <h3 className="font-heading font-bold text-h3">{title}</h3>
        <p>{subtitle}</p>
      </div>
      <p>{description}</p>
      <div>
        <h5 className="text-primary font-heading font-bold text-h5">
          Includes
        </h5>
        <div className="flex flex-wrap gap-2">
          {includes.map((item, index) => (
            <Tags key={index} text={item} />
          ))}
        </div>
      </div>
      <div>
        <Button variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </div>
  );

  const image = (
    <img
      src={imageSrc}
      className="drop-shadow-[0_0px_30px_rgba(255,255,255,0.25)]"
    />
  );

  return (
    <div className="flex gap-16">
      {reverse ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}
