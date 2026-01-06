import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Animaciones rápidas y fluidas coherentes con las secciones anteriores
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15
      }
    }
  }), []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0118] py-20">
      {/* Fondo atmosférico con resplandor violeta central */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8c00ff]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#130b24] p-8 shadow-2xl backdrop-blur-md sm:p-16"
        >
          {/* Decoración: Brillo sutil en la esquina del card */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8c00ff]/5 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a855f7]">
                  Siguiente paso
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
              >
                Probá CelDoctor <br />
                <span className="text-[#a855f7]">como demo.</span>
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400"
              >
                Ideal para empresas, clínicas y equipos médicos. Coordinemos una demo y 
                te mostramos el flujo completo: atención, turnos y seguimiento profesional.
              </motion.p>
            </div>

            <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transition shadow-[0_12px_40px_-18px_rgba(140,0,255,0.9)]"
                  >
                    Ver demo
                  </Link>

                  <Link
                    to="/acceso"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Ingresar / Registrarme
                  </Link>
                </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
