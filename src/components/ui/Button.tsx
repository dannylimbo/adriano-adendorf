import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-vanille text-espresso hover:bg-honig shadow-md shadow-rotbraun/10 border-2 border-honig/40",
  secondary:
    "bg-rotbraun text-off-white hover:bg-weinrot shadow-md shadow-rotbraun/25 border-2 border-rotbraun",
  outline:
    "border-2 border-off-white/90 text-off-white hover:bg-off-white/15 bg-espresso/20",
  ghost:
    "border-2 border-rotbraun/35 text-rotbraun hover:bg-vanille/15 bg-off-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vanille motion-reduce:transition-none active:scale-[0.98] motion-reduce:active:scale-100";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isPdf = href.endsWith(".pdf");
    const isTelOrMail =
      href.startsWith("tel:") || href.startsWith("mailto:");
    const isSpecialLink = isTelOrMail || isPdf;
    const openNewTab = isPdf || (external && !isTelOrMail);

    if (external || isSpecialLink) {
      return (
        <a
          href={href}
          className={classes}
          target={openNewTab ? "_blank" : undefined}
          rel={openNewTab ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
