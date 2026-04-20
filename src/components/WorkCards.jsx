import React from "react";

export function WorkCards({ title, description, icon, number }) {
  return (
    <div className="relative overflow-hidden w-full bg-white border rounded-lg flex flex-col justify-between px-5 py-7 gap-8">
      <span aria-hidden="true" className="absolute opacity-10 pointer-events-none -right-3 -bottom-[8rem]">
        <h3 className="text-[20rem] font-heading text-primary font-bold">{number}</h3>
      </span>

      <div className="relative z-10 flex justify-between items-end">
        <div>
          <h3 className="font-heading text-h3 font-bold text-primary">
            {title}
          </h3>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <img src={icon} className="w-7" />
        </div>
      </div>
      <p className="relative z-10">{description}</p>
    </div>
  );
}
