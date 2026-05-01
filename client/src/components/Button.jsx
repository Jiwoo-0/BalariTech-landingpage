import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  // Base styles applied to every variant
  "inline-flex items-center justify-center gap-2 rounded-full font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[--brand-primary] text-white hover:bg-[--brand-primary]/90",
        secondary:
          "bg-[--brand-secondary] text-white hover:bg-[--brand-secondary]/80",
        outline:
          "border border-[--brand-primary] text-[--brand-primary] bg-transparent hover:bg-[--brand-primary]/10",
        ghost: "bg-transparent text-[--brand-secondary] hover:bg-black/5",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-8  px-3 text-small",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
      shadow: {
        xs: "shadow-xs",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        "2xl": "shadow-2xl",
        none: "shadow-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shadow: "none",
    },
  },
);

export function Button({
  variant,
  size,
  shadow,
  className,
  href,
  children,
  ...props
}) {
  const classes = clsx(buttonVariants({ variant, size, shadow }), className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
