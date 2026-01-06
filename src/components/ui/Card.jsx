export default function Card({ href, children, className = "" }) {
  const base =
    "block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10 hover:border-white/15";
  const Comp = href ? "a" : "div";

  return (
    <Comp href={href} className={`${base} ${className}`}>
      {children}
    </Comp>
  );
}
