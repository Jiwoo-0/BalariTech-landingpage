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
  onAction,
}) {
  const contentOrderClass = reverse ? "min-[869px]:order-2" : "";
  const imageOrderClass = reverse ? "min-[869px]:order-1" : "";

  const content = (
    <div className={`flex flex-col gap-8 ${contentOrderClass}`}>
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
        <Button variant="primary" size="lg" onClick={onAction}>
          {buttonText}
        </Button>
      </div>
    </div>
  );

  const image = (
    <img
      src={imageSrc}
      className={`drop-shadow-[0_0px_30px_rgba(255,255,255,0.25)] object-cover rounded-md ${imageOrderClass}`}
    />
  );

  return (
    <div className="flex flex-col items-center gap-10 min-[869px]:flex-row min-[869px]:items-stretch min-[869px]:gap-16">
      {content}
      {image}
    </div>
  );
}
