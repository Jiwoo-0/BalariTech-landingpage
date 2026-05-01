import React from "react";

const baseInputClass = "px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition";

export function FormInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  error = "",
  ...props
}) {
  const commonClass = `${baseInputClass} ${error ? "border-red-500" : ""} ${className}`;

  if (type === "textarea") {
    return (
      <div className="flex flex-col gap-1">
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={commonClass}
          {...props}
        />
        {error && <span className="text-red-400 text-sm">{error}</span>}
      </div>
    );
  }

  if (type === "select") {
    const { options, ...selectProps } = props;
    return (
      <div className="flex flex-col gap-1">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={commonClass}
          {...selectProps}
        >
          <option value="" disabled className="bg-secondary">
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option} value={option} className="bg-secondary">
              {option}
            </option>
          ))}
        </select>
        {error && <span className="text-red-400 text-sm">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={commonClass}
        {...props}
      />
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
}
