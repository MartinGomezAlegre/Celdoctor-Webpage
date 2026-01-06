import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote:
      "La interfaz es súper intuitiva. Mis padres son mayores y la usan sin problemas para sus consultas de rutina. La calidad de video es excelente.",
    name: "Sofía Méndez",
    role: "Usuaria Particular",
    stars: 5,
    avatar: "/images/testimonials/sofia.jpg", // Asegúrate de tener estas imágenes
  },
  {
    quote:
      "Me atendieron rapidísimo y pude resolver todo desde casa. La receta digital me la aceptaron sin problemas en la farmacia.",
    name: "Marcos G.",
    role: "Paciente",
    stars: 5,
    avatar: "/images/testimonials/marcos.jpg",
  },
  {
    quote:
      "Excelente servicio 24/7. Muy buena coordinación y seguimiento. Sentí una atención cercana y profesional en todo momento.",
    name: "Laura P.",
    role: "Usuaria Particular",
    stars: 5,
    avatar: "/images/testimonials/laura.jpg",
  },
];

// Animaciones rápidas
const fastSpring = { type: "spring", stiffness: 300, damping: 30 };

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Autoplay
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => next(), 6000);
    return () => clearInterval(t);
  }, [inView, index]);

  const active = TESTIMONIALS[index];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0118] py-24 text-white">
      {/* Luces de fondo sutiles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#8c00ff]/10 blur-[120px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={fastSpring}
      >
        {/* Título exacto a la imagen */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lo que dicen nuestros <span className="text-[#a855f7] underline underline-offset-[12px] decoration-[#a855f7]/50">pacientes</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Historias reales de personas que cuidan su salud con CelDoctor.
          </p>
        </div>

        {/* Área del Slider */}
        <div className="relative mt-20 flex items-center justify-center gap-4 sm:gap-8">
          
          {/* Botón Izquierdo */}
          <button
            onClick={prev}
            className="group z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#130b24] transition-all hover:bg-[#1a0f35] hover:border-white/20 active:scale-90"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Card Principal */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-[#130b24] px-8 py-12 shadow-2xl backdrop-blur-md sm:px-16 sm:py-16">
            
            {/* Comilla Gigante */}
            <div className="absolute left-10 top-10 select-none text-7xl font-serif text-[#a855f7]/30">
              “
            </div>

            <div className="relative flex flex-col items-center">
              {/* Estrellas */}
              <div className="mb-8">
                <Stars count={active.stars} />
              </div>

              {/* Texto del Testimonio animado */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="text-xl italic leading-relaxed text-zinc-100 sm:text-2xl">
                    "{active.quote}"
                  </p>

                  <div className="mt-12 flex flex-col items-center">
                    {/* Avatar con anillo violeta */}
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#a855f7] p-1 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      <img
                        src={active.avatar}
                        alt={active.name}
                        className="h-full w-full rounded-full object-cover grayscale-[0.2]"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-lg font-bold text-white">{active.name}</h4>
                      <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide mt-1">{active.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Botón Derecho */}
          <button
            onClick={next}
            className="group z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#130b24] transition-all hover:bg-[#1a0f35] hover:border-white/20 active:scale-90"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Indicadores (Dots) */}
        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#a855f7]" : "w-2.5 bg-zinc-700 hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={i < count ? "#facc15" : "none"}
          className={i < count ? "text-yellow-400" : "text-zinc-700"}
        >
          <path
            fill="currentColor"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}