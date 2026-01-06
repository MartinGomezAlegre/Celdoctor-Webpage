import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

export default function EmpresasTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Animaciones de contenedor (stagger)
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Columna Izquierda: Texto */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              Potencia el bienestar de tu equipo y{" "}
              <span className="text-[#a855f7]">reduce el ausentismo.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Ofrece a tus colaboradores un beneficio de salud real y tangible.
              CelDoctor es la solución corporativa que cuida a tu talento humano
              mientras optimiza la productividad de tu organización.
            </motion.p>

            <motion.ul variants={itemVariants} className="mt-10 space-y-5">
              <Li>Aumento inmediato de la productividad.</Li>
              <Li>Retención de talento clave y fidelización.</Li>
              <Li>Reducción drástica del ausentismo laboral.</Li>
              <Li>Reportes de gestión y uso en tiempo real.</Li>
            </motion.ul>

            <motion.div variants={itemVariants} className="mt-12">
              <Link
                to="/empresas"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[#a855f7] px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(140,0,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(140,0,255,0.8)] active:scale-95"
              >
                Descubrir solución corporativa
              </Link>
            </motion.div>
          </div>

          {/* Columna Derecha: Imagen y Badge */}
          <motion.div
            variants={itemVariants}
            className="relative lg:ml-auto"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Contenedor de la Imagen con Marco Grueso */}
            <div className="relative overflow-hidden rounded-[40px] border-[12px] border-[#130b24] shadow-2xl">
              <img
                src="../public/images/empresateaser.png" // Asegúrate de tener esta imagen
                alt="CelDoctor Empresas"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[500px]"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/40 to-transparent" />
            </div>

            {/* Badge ROI (Flotante) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5,
              }}
              whileHover={{ scale: 1.02 }}
              className="absolute -bottom-8 left-8 flex items-center gap-3 rounded-full border border-white/10 bg-[#130b24] px-6 py-3.5 shadow-2xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                {/* Icono ROI (Gráfico de tarta) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0zm1.5 0h6.75V6.75a6.75 6.75 0 00-6.75 6.75z"
                    clipRule="evenodd"
                  />
                  <path d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-white">
                ROI Positivo garantizado
              </span>
              {/* Pulse sutil en el badge */}
              <motion.span
                className="pointer-events-none absolute -inset-1 rounded-full bg-amber-400/10"
                animate={{ opacity: inView ? [0.1, 0.3, 0.1] : 0.1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Glow decorativo detrás de la imagen */}
            <div className="absolute -z-10 h-full w-full scale-95 bg-[var(--accent)]/20 blur-[100px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Componente para los items de la lista
function Li({ children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-1 grid h-6 w-6 flex-none place-items-center rounded-full bg-[#a855f7]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-medium text-white/90 leading-tight">{children}</span>
    </li>
  );
}