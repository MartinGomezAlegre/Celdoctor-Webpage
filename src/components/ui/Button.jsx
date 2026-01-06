export default function Button({ as: As = "button", variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";
  const variants = {
    primary: "bg-cyan-300 text-slate-900 hover:bg-cyan-200 focus:ring-cyan-300",
    outline:
      "border border-white/20 text-white hover:bg-white/10 focus:ring-white/30",
  };

  return <As className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
