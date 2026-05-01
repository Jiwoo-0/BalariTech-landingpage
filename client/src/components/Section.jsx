import clsx from "clsx";

export function Section({
  children,
  className,

  // Background
  bg = "default",         // "default" | "muted" | "primary" | "secondary" | "accent" | "none"

  // Max-width of the inner container
  size = "lg",            // "sm" | "md" | "lg" | "xl" | "full"

  // Vertical padding
  padding = "md",         // "none" | "sm" | "md" | "lg" | "xl"

  // Text/content alignment
  align = "left",         // "left" | "center" | "right"

  as = "section",

  ...props
}) {
  const Component = as;

  return (
    <Component
      className={clsx(
        "scroll-mt-24",
        bgVariants[bg],
        paddingVariants[padding],
        className
      )}
      {...props}
    >
      <div className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeVariants[size],
        alignVariants[align],
      )}>
        {children}
      </div>
    </Component>
  );
}

const bgVariants = {
  default: "bg-white",
  muted:   "bg-gray-50",
  primary: "bg-[--brand-primary]",
  secondary:    "bg-[--brand-secondary] text-white",
  accent:  "bg-[--brand-accent] text-white",
  none:    "",
};

const sizeVariants = {
  sm:   "max-w-2xl",
  md:   "max-w-4xl",
  lg:   "max-w-6xl",
  xl:   "max-w-7xl",
  full: "max-w-none",
};

const paddingVariants = {
  none: "",
  sm:   "py-8",
  md:   "py-16",
  lg:   "py-24",
  xl:   "py-32",
};

const alignVariants = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
};
