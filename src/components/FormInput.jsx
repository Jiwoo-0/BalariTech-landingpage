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
  ...props
}) {
  const commonClass = `${baseInputClass} ${className}`;

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={commonClass}
        {...props}
      />
    );
  }

  if (type === "select") {
    const { options, ...selectProps } = props;
    return (
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
    );
  }

  return (
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
  );
}
