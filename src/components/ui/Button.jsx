import Link from "next/link";

const buttonVariantClasses = {
  primary: "bg-gold text-white hover:bg-gold-hover",
  outline: "border border-white text-white hover:bg-white hover:text-ink",
};

const buttonSizeClasses = {
  small: "px-5 py-2 text-xs",
  medium: "px-8 py-3 text-sm",
  large: "px-10 py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  children,
  ...buttonProps
}) {
  const buttonClasses = [
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200",
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  // With href it becomes a link, otherwise a normal button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
}
