import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0118] text-white pb-32 pt-16 lg:pt-24 lg:pb-40">
      {/* Fondo exacto a la imagen */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradiente base oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#0a0118] to-[#150228]" />
        
        {/* Glow central violeta grande y difuminado */}
        <div className="absolute -top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[140px]" />
        
        {/* Glow lateral izquierdo más sutil */}
        <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[var(--accent)]/15 blur-[120px] opacity-80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Columna Izquierda: Texto y Botones */}
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            animate="show"
            className="z-10"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            >
              UN HOSPITAL DIGITAL
              <br />
              EN TU CELULAR
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              Acceso inmediato a médicos especialistas, recetas electrónicas y videoconsultas 24/7. Tu bienestar al alcance de un clic.
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="mt-10"
            >
              <Link
                to="/acceso"
                className="group inline-flex items-center justify-center rounded-full bg-[#8c00ff] px-8 py-4 text-base font-bold text-white shadow-[0_20px_40px_-15px_rgba(140,0,255,0.6)] transition-all hover:scale-105 hover:bg-[#9d26ff] active:scale-95"
              >
                Atención Inmediata
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Celular con Pantalla */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
            className="relative z-20 mx-auto w-full max-w-[320px] lg:ml-auto lg:mr-0 lg:max-w-[360px]"
            style={{ transformOrigin: 'center center' }}
          >
            {/* Sombra realista debajo del teléfono */}
            <div className="absolute -bottom-14 -left-10 -right-10 h-14 rounded-[100%] bg-[#8c00ff]/30 blur-2xl" />

            {/* Marco del Celular */}
            <div className="relative overflow-hidden rounded-[48px] border-[10px] border-[#1a0b35] shadow-2xl">
              {/* Pantalla de la App */}
              <img
                src="../public/images/AppCeldoctor.png" // Asegúrate de que esta sea la captura de pantalla del celular
                alt="CelDoctor App"
                className="w-full select-none"
                draggable="false"
              />
              
              {/* Reflejo de pantalla (Glossy effect) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 rounded-[38px]" />
            </div>

            {/* Animación de flotación suave */}
            <motion.div
              className="absolute inset-0 rounded-[48px]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}