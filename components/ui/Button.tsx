import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "clay" | "ghost";
type ButtonSize = "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends SharedProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

interface ButtonAsButton extends SharedProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase text-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bay-teal disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-bay-teal text-shell hover:bg-bay-teal-dark",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  clay: "bg-clay text-shell hover:brightness-95",
  ghost: "text-ink hover:text-bay-teal underline underline-offset-4",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-sm",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    if (props.external || props.href.startsWith("http")) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
