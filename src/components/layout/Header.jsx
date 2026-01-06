import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { navLinks, paraQuienItems, serviciosItems } from "../../data/nav";

import DemoModal from "../ui/DemoModal.jsx";


function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function Chevron({ open }) {
  return <span className={cx("text-[10px] transition", open ? "rotate-180" : "")}>▾</span>;
}

function PurpleIcon() {
  return (
    <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
      <span className="absolute inset-0 rounded-xl bg-[var(--accent)]/30 blur-xl" />
      <span className="relative h-5 w-5 rounded-md bg-[var(--accent)]" />
    </span>
  );
}

function MegaMenu({ label, items, open, onOpen, onClose, width = 980, variant = "mega" }) {
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, onClose]);

  const isParaQuien = variant === "paraquien";

  return (
    <div className="relative" ref={ref}>
      <button
        className={cx(
          "flex items-center gap-2 text-sm font-medium",
          "text-[var(--muted)] hover:text-white transition"
        )}
        onMouseEnter={onOpen}
        onFocus={onOpen}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {label} <Chevron open={open} />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-[calc(100%+14px)] z-50 -translate-x-1/2"
          onMouseLeave={onClose}
        >
          <div
            className={cx(
              "rounded-2xl border border-white/10",
              "bg-[rgba(13,4,33,0.88)] backdrop-blur-xl",
              "shadow-[0_30px_120px_-60px_rgba(0,0,0,0.95)]"
            )}
            style={{ width, maxWidth: "95vw" }}
          >
            <div className={cx("p-6", isParaQuien ? "grid gap-4 md:grid-cols-3" : "grid gap-2 md:grid-cols-3")}>
              {items.map((it) => (
                <Link
                  key={it.title}
                  to={it.to}
                  className={cx(
                    "group flex gap-4 rounded-xl",
                    isParaQuien ? "p-5" : "p-4",
                    "border border-transparent hover:border-white/10",
                    "hover:bg-white/5 transition"
                  )}
                >
                  <PurpleIcon />
                  <div>
                    <p className="text-sm font-semibold text-white">{it.title}</p>
                    <p className="mt-1 text-sm leading-snug text-[var(--muted)]">{it.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            {!isParaQuien && (
              <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                <span className="text-xs text-[var(--muted)]">CelDoctor • Ecosistema de Salud Digital</span>
                <Link to="/servicios" className="text-xs font-semibold text-[var(--accent)] hover:opacity-90">
                  Ver todos →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
  pathname,
  mobileServiciosOpen,
  setMobileServiciosOpen,
  mobileParaQuienOpen,
  setMobileParaQuienOpen,
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    onClose();
    setMobileServiciosOpen(false);
    setMobileParaQuienOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] lg:hidden">
      {/* Backdrop oscuro real */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.78)]" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-[88vw] max-w-sm overflow-y-auto border-l border-white/10 bg-[rgba(13,4,33,0.98)] backdrop-blur-xl">
        {/* Header fijo */}
        <div className="sticky top-0 z-10 border-b border-white/10 bg-[rgba(13,4,33,0.98)] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold tracking-tight text-white">CEL</span>
              <span className="text-xl font-light tracking-tight text-white/85">DOCTOR</span>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-5 space-y-4">
          {/* Servicios accordion */}
          <button
            onClick={() => setMobileServiciosOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10 transition"
          >
            <span className="text-sm font-semibold text-white">Servicios</span>
            <span className={cx("text-white/80 transition", mobileServiciosOpen ? "rotate-180" : "")}>▾</span>
          </button>

          {mobileServiciosOpen && (
            <div className="space-y-2">
              {serviciosItems.map((it) => (
                <Link
                  key={it.title}
                  to={it.to}
                  className="block rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5 transition"
                >
                  <p className="text-sm font-semibold text-white">{it.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{it.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {/* Para Quién accordion */}
          <button
            onClick={() => setMobileParaQuienOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10 transition"
          >
            <span className="text-sm font-semibold text-white">Para Quién</span>
            <span className={cx("text-white/80 transition", mobileParaQuienOpen ? "rotate-180" : "")}>▾</span>
          </button>

          {mobileParaQuienOpen && (
            <div className="space-y-2">
              {paraQuienItems.map((it) => (
                <Link
                  key={it.title}
                  to={it.to}
                  className="block rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5 transition"
                >
                  <p className="text-sm font-semibold text-white">{it.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{it.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="pt-2 grid gap-3">
            <Link
              to="/acceso"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ingresar / Registrar
            </Link>

            <Link
              to="/empresas"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transition shadow-[0_12px_40px_-18px_rgba(140,0,255,0.9)]"
            >
              Agendar Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [mobileParaQuienOpen, setMobileParaQuienOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const navLink = ({ isActive }) =>
    cx("text-sm font-medium transition", isActive ? "text-white" : "text-[var(--muted)] hover:text-white");

 return (
  <>
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(13,4,33,0.75)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--accent)]/25" />

      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-white">CEL</span>
          <span className="text-2xl font-light tracking-tight text-white/85">DOCTOR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <MegaMenu
            label="Servicios"
            items={serviciosItems}
            open={openMenu === "servicios"}
            onOpen={() => setOpenMenu("servicios")}
            onClose={() => setOpenMenu(null)}
            width={1040}
            variant="mega"
          />

          <MegaMenu
            label="Para Quién"
            items={paraQuienItems}
            open={openMenu === "paraquien"}
            onOpen={() => setOpenMenu("paraquien")}
            onClose={() => setOpenMenu(null)}
            width={920}
            variant="paraquien"
          />

          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLink}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Desktop login */}
          <Link
            to="/acceso"
            className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
          >
            Ingresar / Registrar
          </Link>

          {/* Desktop CTA */}
          <button
            onClick={() => setDemoOpen(true)}
            className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] hover:opacity-95 transition shadow-[0_12px_40px_-18px_rgba(140,0,255,0.9)]"
          >
            Ver demo
          </button>

          {/* Mobile CTA */}
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex sm:hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] hover:opacity-95 transition"
          >
            Ver demo
          </button>

          <button
            className="inline-flex lg:hidden items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </Container>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
        mobileServiciosOpen={mobileServiciosOpen}
        setMobileServiciosOpen={setMobileServiciosOpen}
        mobileParaQuienOpen={mobileParaQuienOpen}
        setMobileParaQuienOpen={setMobileParaQuienOpen}
      />
    </header>

    {/* ✅ EL MODAL VA ACÁ, DENTRO DEL RETURN */}
    <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} title="Demo de CelDoctor">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/70">Vista rápida</div>

          <div className="mt-3 rounded-xl border border-white/10 bg-[rgba(0,0,0,0.25)] p-4">
            <div className="text-sm font-semibold text-white">Telemedicina</div>
            <p className="mt-1 text-sm text-white/70">
              Consultas, recetas digitales y beneficios en farmacias.
            </p>

            <div className="mt-4 grid gap-2">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80">
                Chat médico inmediato
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80">
                Videollamada 24/7
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80">
                Receta digital
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/70">Siguiente paso</div>
          <h3 className="mt-2 text-xl font-bold text-white">Probá la experiencia en 30 segundos</h3>
          <p className="mt-2 text-sm text-white/70">
            Esta demo muestra lo esencial: elegir servicio, atención y receta.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/acceso"
              onClick={() => setDemoOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
            >
              Crear cuenta
            </Link>

            <button
              onClick={() => setDemoOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </DemoModal>
  </>
);
}
