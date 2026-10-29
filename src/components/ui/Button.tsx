import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type AsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-colors duration-150 select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-cyan-400 focus-visible:ring-offset-[#0b2a30] " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-cyan-300 text-[#06242a] hover:bg-cyan-200 active:bg-cyan-400",
  outline:
    "border border-white/20 text-white hover:bg-white/10 active:bg-white/15",
  ghost: "text-white/80 hover:bg-white/10 hover:text-white",
  whatsapp: "bg-emerald-500 text-white hover:bg-emerald-400 active:bg-emerald-600",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? <Spinner /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );

  // Renders an <a> when href is passed, otherwise a <button>
  if ("href" in props && props.href) {
    return (
      <a
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
        className={classes}
      >
        {content}
      </a>
    );
  }

  const { type = "button", disabled, ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonRest}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
    >
      {content}
    </button>
  );
}

/* ---------- Usage ----------
import Button from "./Button";

<Button>Get a Quote</Button>
<Button variant="outline" size="sm">Call Now</Button>
<Button variant="whatsapp" href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
  WhatsApp
</Button>
<Button variant="ghost" rightIcon={<ArrowIcon />}>Learn more</Button>
<Button loading>Sending</Button>
<Button type="submit" fullWidth size="lg">Send enquiry</Button>
*/