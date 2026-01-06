// src/components/Especialidades.jsx
import { especialidades } from "../../data/especialidades";
import { Link } from "react-router-dom";
// 1. Importamos Framer Motion
import { motion } from "framer-motion";

// --- VARIANTS PARA ANIMACIONES ---
// Definimos cómo se comportan las animaciones para reutilizarlas

// Animación para el contenedor principal de la lista (controla el escalonado)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso de 0.2s entre cada tarjeta
    },
  },
};

// Animación individual para cada tarjeta (aparece desde abajo)
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Empieza invisible y 50px más abajo
  visible: {
    opacity: 1,
    y: 0, // Termina visible y en su posición original
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
  },
};

// Animación para el texto del Hero
const heroTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- COMPONENTES ---

function Icon({ name }) {
  // Mantenemos el icono igual, la animación de escala la manejará el contenedor padre
  const common = "h-6 w-6 text-white transition-colors duration-300 group-hover:text-purple-200";
  const paths = {
    stethoscope: <path d="M4.8 3v6a7.2 7.2 0 0 0 14.4 0V3M10 21h4M12 17v4M18 8h2a2 2 0 0 1 0 4h-2" />,
    baby: <path d="M12 22a9 9 0 1 0-9-9c0 3.3 2.2 6 5 6h8c2.8 0 5-2.7 5-6a9 9 0 0 0-9-9ZM9 12h.01M15 12h.01M9.5 15c.8.7 1.6 1 2.5 1s1.7-.3 2.5-1" />,
    brain: <path d="M9.5 2a4.4 4.4 0 0 0-4.4 4.4c0 1 .4 1.8 1 2.4l-1 4.2c-.3 1.2.7 2.3 1.9 2.3h7c1.2 0 2.2-1.1 1.9-2.3l-1-4.2c.6-.6 1-1.5 1-2.4a4.4 4.4 0 0 0-4.4-4.4" />,
    skin: <path d="M12 2C7 2 3 7 3 12s4 10 9 10 9-5 9-10S17 2 12 2Zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Z" />,
    female: <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 0v7m-3-3h6" />,
    bone: <path d="M17 10c.7-.7 1.7-.7 2.4 0 1.3 1.3 1.3 3.3 0 4.6l-10 10c-1.3 1.3-3.3 1.3-4.6 0-.7-.7-.7-1.7 0-2.4L17 10Z" />,
    nutrition: <path d="M12 22c5-4 8-8 8-12a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 4 3 8 10 12Z" />,
    heart: <path d="M12 21s-8-5.5-8-12a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2c0 6.5-8 12-8 12Z" />
  };

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.heart}
    </svg>
  );
}

function SpecialtyCard({ item, index }) {
  const isLeftText = index % 2 === 0;

  // Convertimos el section en motion.section y aplicamos los variants
  return (
    <motion.div
      variants={cardVariants} // Aplica la animación de entrada
      className="group relative mb-16 overflow-hidden rounded-[40px] border border-white/10 bg-[#1A0B3D]/40 p-8 backdrop-blur-md transition-colors duration-500 hover:border-purple-500/40 hover:bg-[#1A0B3D]/60 shadow-2xl sm:p-10"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Lado Texto */}
        <div className={`${isLeftText ? "order-1" : "order-2"} space-y-6`}>
          {/* Icono con animación "spring" al hacer hover */}
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 44, 255, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10"
          >
            <Icon name={item.icon} />
          </motion.div>
          
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">{item.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-white/60">{item.desc}</p>
          </div>

          <ul className="space-y-3">
            {(item.bullets || []).map((b, i) => (
              // Pequeña animación de entrada para los bullets también
              <motion.li 
                 key={b}
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                 viewport={{ once: true }}
                 className="flex items-center gap-3 text-white/70"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                {b}
              </motion.li>
            ))}
          </ul>

          <div className="pt-4">
            {/* Botón animado */}
            <Link to="/acceso">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#9D4DFF" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center justify-center rounded-2xl bg-[#8B2CFF] px-10 py-4 text-lg font-bold text-white shadow-[0_10px_40px_-10px_#8B2CFF]"
              >
                {item.cta || "Agendar consulta"}
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Lado Imagen */}
        <div className={isLeftText ? "order-2" : "order-1"}>
          {/* Contenedor de imagen con efecto de escala suave en hover */}
          <motion.div 
            className="relative aspect-video w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0420]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
             {item.image ? (
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover"
                  // Reemplazamos el hover CSS por una transición más suave de Framer
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
             ) : (
                <div className="flex h-full w-full items-center justify-center opacity-20">
                    <Icon name={item.icon} />
                </div>
             )}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Especialidades() {
  return (
    <main className="relative min-h-screen bg-[#0B0420] text-white overflow-hidden">
      
      {/* Fondos estáticos (sin cambios) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120726] via-[#0B0420] to-[#05010E]" />
        <motion.div 
          // Animamos el fondo para que "respire" muy lentamente
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 -top-1/4 h-[80%] w-[80%] rounded-full bg-purple-900/20 blur-[120px]" 
        />
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(139,44,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        {/* Header Animado */}
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Se anima cuando el 50% es visible
          transition={{ staggerChildren: 0.1 }} // Escatona los elementos internos
          className="mb-24 space-y-4 text-center sm:text-left"
        >
          <motion.p variants={heroTextVariants} className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
            Portal Unificado
          </motion.p>
          <motion.h1 variants={heroTextVariants} className="text-5xl font-black tracking-tight sm:text-7xl">
            Ingresá a <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-purple-500 inline-block"
            >CelDoctor.</motion.span>
          </motion.h1>
          <motion.p variants={heroTextVariants} className="max-w-2xl text-xl text-white/50 sm:mx-0 mx-auto">
            Gestioná tu salud con una visión integral. Atención digital y seguimiento profesional desde un solo lugar.
          </motion.p>
        </motion.header>

        {/* Lista de Cards Animada con Escalonado (Stagger) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Empieza a animar 100px antes de entrar
          className="space-y-16"
        >
          {especialidades.map((item, i) => (
            <SpecialtyCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}