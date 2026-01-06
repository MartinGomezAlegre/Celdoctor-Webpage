import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

// Animaciones premium suaves (cubic-bezier)
const smoothTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

export default function JoinDoctors() {
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

  // Animaciones de elementos individuales
  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: smoothTransition },
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
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Columna Izquierda: Imagen */}
          <motion.div
            className="relative lg:mr-auto"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Contenedor de la Imagen con Marco */}
            <div className="relative overflow-hidden rounded-[40px] border-[12px] border-[#130b24] shadow-2xl">
              <img
                src="/images/medico-hero.png" // Asegúrate de tener esta imagen
                alt="Profesional CelDoctor"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[500px]"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/40 to-transparent" />
            </div>

            {/* Badge Flotante (Verde) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ ...smoothTransition, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="absolute -bottom-8 right-8 flex items-center gap-3 rounded-full border border-white/10 bg-[#130b24] px-6 py-3.5 shadow-2xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                {/* Icono Gráfico Ascendente */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
                  <path d="M16 7H22V13" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-white">
                Optimiza tus ingresos
              </span>
              {/* Pulse sutil */}
              <motion.span
                className="pointer-events-none absolute -inset-1 rounded-full bg-emerald-400/10"
                animate={{ opacity: inView ? [0.1, 0.3, 0.1] : 0.1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Glow decorativo */}
            <div className="absolute -z-10 h-full w-full scale-95 bg-[var(--accent)]/20 blur-[100px]" />
          </motion.div>

          {/* Columna Derecha: Texto */}
          <div>
            <motion.div
              variants={itemVariants}
              className="text-xs font-bold tracking-[0.2em] text-[#a855f7] uppercase"
            >
              PROFESIONALES DE LA SALUD
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              Digitaliza tu consultorio y sé parte de la{" "}
              
              <span className="text-[#a855f7]">red médica del futuro.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Únete a CelDoctor y accede a miles de pacientes sin barreras
              geográficas. Gestiona tu agenda con total libertad, reduce el
              ausentismo y garantiza el cobro de tus honorarios. Nosotros nos
              ocupamos de la tecnología; tú, de curar.
            </motion.p>

            <motion.ul variants={itemVariants} className="mt-10 space-y-5">
              <Li>Flexibilidad horaria total (tú eliges cuándo atender).</Li>
              <Li>Plataforma intuitiva con Historia Clínica Digital integrada.</Li>
              <Li>Pagos garantizados y transparentes.</Li>
            </motion.ul>

            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/acceso"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[#a855f7] px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(140,0,255,0.6)] transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(140,0,255,0.8)] active:scale-95"
              >
                Postularme ahora
              </Link>

              <Link
                to="/servicios"
                className="group inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                Más información
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Componente para los items de la lista con checks violetas
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
      <span className="text-lg font-medium text-white/90 leading-tight">
        {children}
      </span>
    </li>
  );
}