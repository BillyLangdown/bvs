import Link from "next/link";

const styles = {
  base: "inline-flex items-center justify-center px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 disabled:opacity-50 disabled:pointer-events-none",
  primary:
    "bg-emerald-900 text-white hover:bg-emerald-800",
  secondary:
    "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50",
  ghost:
    "bg-transparent text-zinc-900 hover:bg-zinc-100",
};

export function Button({
  as = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const cn = `h-10 ${styles.base} ${styles[variant] || styles.primary} ${className}`;

  if (as === "link") {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} className={cn} {...rest}>
        {children}
      </Link>
    );
  }

  const Comp = as;
  return <Comp className={cn} {...props} />;
}

