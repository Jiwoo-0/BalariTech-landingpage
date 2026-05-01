import React from "react";

export function WwCards({ title, description, image, className = "" }) {
  return (
    <div
      className={`relative h-80 w-full overflow-hidden rounded-md bg-secondary px-5 py-7 text-white ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f2528] from-15% to-transparent" />

      <div className="relative flex h-full flex-col justify-end gap-4">
        <h3 className="font-heading text-h3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default WwCards;
