import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

// Animaciones rápidas tipo "Spring"
const fastSpring = { type: "spring", stiffness: 300, damping: 30 };

export default function Feature24x7() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: fastSpring },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0118] py-20 text-white">
      {/* Luces de fondo para profundidad */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#8c00ff]/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#8c00ff]/5 blur-[120px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-7xl px-6 lg:px-12"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Columna Izquierda: Texto */}
          <div className="flex flex-col items-start">
            {/* Icono Estetoscopio exacto */}
            <motion.div 
              variants={item}
              className="mb-8 flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-[#1a0b35]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#a855f7]">
                <path d="M11 2a7 7 0 0 0-7 7v1a4 4 0 0 0 8 0V9a7 7 0 0 0-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 14v1a4 4 0 0 1-8 0v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M21 10a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V9a3 3 0 0 1 6 0v1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18 13v3a4 4 0 0 1-8 0v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.div>

            <motion.h2 
              variants={item}
              className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl"
            >
              Atención médica multicanal <br />
              24/7 con <span className="bg-[#8c00ff]/20 px-1 text-[#a855f7]">equipo propio</span>,  <br />
              más de 22 especialidades <br />
              disponibles.
            </motion.h2>

            <motion.p 
              variants={item}
              className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400"
            >
              Ofrecemos servicios de telemedicina con equipo médico propio cubriendo todos los
              canales de comunicación y una atención inmediata 24/7. Contamos con especialistas
              médicos de más de 22 especialidades, enfermería, nutricionistas y psicólogos.
            </motion.p>

            <motion.div variants={item} className="mt-12">
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8c00ff] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_50px_-15px_rgba(140,0,255,0.5)] transition-all hover:scale-105 hover:bg-[#9d26ff]"
              >
                Ver especialidades
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Columna Derecha: Imagen */}
          <motion.div 
            variants={item}
            className="relative lg:ml-auto"
          >
            {/* Contenedor de la Imagen con esquinas muy redondeadas */}
            <div className="relative overflow-hidden rounded-[40px] border-[12px] border-[#1a0b35] shadow-2xl">
              <img
                src="../public/images/DoctoraESPECIALIDADES.png"
                alt="Doctora CelDoctor"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[500px]"
              />
              
              {/* Overlay de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Badge Flotante "Respuesta Inmediata" */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, ...fastSpring }}
              className="absolute -bottom-6 left-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#130b24]/95 px-5 py-3.5 shadow-2xl backdrop-blur-md"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-white">Respuesta Inmediata</span>
            </motion.div>

            {/* Decoración: Glow sutil detrás de la imagen */}
            <div className="absolute -z-10 h-full w-full scale-95 bg-[#8c00ff]/20 blur-[100px]" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}