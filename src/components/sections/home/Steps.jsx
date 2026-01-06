import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Steps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Animaciones de contenedor (stagger)
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  // Animaciones de elementos individuales (fade in + slide up)
  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // Cubic-bezier suave
      },
    }),
    []
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a0118] text-white py-24 px-6"
    >
      {/* Fondo atmosférico sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tu salud resuelta en{" "}
            <span className="text-[var(--accent)] underline underline-offset-8 decoration-[var(--accent)]/50">
              3 simples pasos
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Sin salas de espera ni traslados. Atención médica de calidad donde estés.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <StepCard
            number="01"
            title="Regístrate Gratis"
            text="Crea tu perfil en menos de 2 minutos. Carga tus datos básicos y antecedentes médicos de forma segura."
            icon="user-plus"
            variants={itemVariants}
          />
          <StepCard
            number="02"
            title="Elige tu Consulta"
            text="Selecciona &quot;Guardia 24/7&quot; para atención inmediata o agenda una cita con especialistas por videollamada."
            icon="video"
            variants={itemVariants}
          />
          <StepCard
            number="03"
            title="Recibe tu Diagnóstico"
            text="Obtén tu diagnóstico, recetas digitales y órdenes de estudio directamente en tu celular al finalizar."
            icon="prescription"
            variants={itemVariants}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/acceso"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[#a855f7] px-10 py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(140,0,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(140,0,255,0.8)] active:scale-95"
          >
            Comenzar ahora
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StepCard({ number, title, text, icon, variants }) {
  return (
    <motion.div
      variants={variants}
      // Hover effect sutil para las tarjetas
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#130b24] p-10 transition-colors hover:border-white/20"
    >
      <div>
        <div className="flex items-start justify-between">
          {/* Numero */}
          <div className="text-6xl font-extrabold tracking-tight text-[var(--accent)] leading-none">
            {number}
          </div>
          
          {/* Icono */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/20">
            <Icon type={icon} />
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-white/70">{text}</p>
      </div>
    </motion.div>
  );
}

// Iconos SVG exactos de la imagen
function Icon({ type }) {
  const iconClass = "text-[var(--accent)] h-7 w-7";
  
  switch (type) {
    case "user-plus":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      );
    case "video":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
        </svg>
      );
    case "prescription":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          <path d="M10 14h2v2h-2zM10 10h2v2h-2z"/>
           <text x="8.5" y="16.5" fontFamily="Arial" fontSize="6" fontWeight="bold" fill="currentColor">Rx</text>
        </svg>
      );
    default:
      return null;
  }
}