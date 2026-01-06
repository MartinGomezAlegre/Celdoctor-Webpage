import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Siren,
  MapPin,
  PhoneCall,
  Activity,
  ArrowRight,
  Plus,
  Ambulance,
  ShieldAlert,
  Radio,
  Clock
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITIES ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS BASE ---

// 1. Tarjeta Base
const Card = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative overflow-hidden rounded-[2.5rem]",
      "bg-gradient-to-br from-[#120D26] via-[#161030] to-[#1F1746]", 
      "border border-purple-500/10 shadow-2xl shadow-purple-900/10",
      className
    )}
  >
    {children}
  </motion.div>
);

// 2. Icono Glass (Con variante de alerta roja)
const GlassIcon = ({ icon: Icon, color = "purple" }) => (
  <div className={cn(
      "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 backdrop-blur-md",
      color === "red" ? "bg-red-500/10 text-red-400 ring-red-500/20" : 
      color === "purple" ? "bg-purple-500/10 text-purple-300 ring-purple-500/20" :
      "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20"
  )}>
    <Icon size={28} />
  </div>
);

// 3. Botón Principal (Variante de Emergencia)
const PrimaryButton = ({ children, className, onClick, variant = "default" }) => (
  <button 
    onClick={onClick}
    className={cn(
    "group relative flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all hover:scale-[1.02] shadow-lg",
    variant === "danger" 
      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:shadow-red-500/30" 
      : "bg-white text-[#06040F] hover:bg-purple-100 hover:shadow-purple-500/20",
    className
  )}>
    {children}
    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
  </button>
);

// --- ILUSTRACIONES CSS (Urgencias) ---

// 1. Botón de Pánico (SOS)
const PanicButtonUI = () => (
  <div className="relative z-10 mx-auto mt-6 w-[200px] h-[200px] flex items-center justify-center">
      {/* Ondas de expansión */}
      <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute inset-4 bg-red-500/20 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
      
      {/* Base del botón */}
      <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-[#1e1b2e] to-[#000] border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
          {/* Círculo interno rojo */}
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-500 to-rose-700 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center border-4 border-[#1e1b2e]">
              <span className="text-2xl font-black text-white tracking-widest drop-shadow-md">SOS</span>
              <span className="text-[8px] text-white/80 font-bold mt-1">PRESS</span>
          </div>
          
          {/* Brillo superior */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/10 rounded-full blur-md" />
      </div>
  </div>
);

// 2. Mapa de Geolocalización
const GeoLocationRadar = () => (
    <div className="relative h-[160px] w-full flex items-center justify-center overflow-hidden">
        {/* Mapa Grid Fondo */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        {/* Radar Scan */}
        <div className="absolute w-[240px] h-[240px] border border-red-500/30 rounded-full animate-[spin_4s_linear_infinite]" 
             style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }} 
        />
        
        {/* Pin Central (Usuario) */}
        <div className="relative z-10 flex flex-col items-center">
             <div className="h-4 w-4 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] animate-pulse" />
             <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-transparent" />
             <div className="w-12 h-12 border border-red-500/50 rounded-full absolute -top-4 animate-ping" />
        </div>

        {/* Coordenadas simuladas */}
        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur border border-white/10 px-2 py-1 rounded text-[8px] font-mono text-red-300">
            LAT: -34.6037 <br/> LNG: -58.3816
        </div>
    </div>
);

// 3. Tarjeta de Estado de Ambulancia
const AmbulanceStatus = () => (
    <div className="relative mt-8 w-full max-w-[240px] mx-auto perspective-[1000px] group">
        <div className="relative bg-[#1e2538] rounded-xl p-4 border-l-4 border-red-500 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                    <div className="h-10 w-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400">
                        <Ambulance size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">Estado</div>
                        <div className="text-sm text-white font-bold">En camino</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-400 font-bold uppercase">ETA</div>
                    <div className="text-lg text-red-400 font-bold animate-pulse">8 min</div>
                </div>
            </div>
            
            {/* Barra de progreso */}
            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden mb-2">
                <div className="h-full w-2/3 bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400">
                <span>Despachada</span>
                <span>Llegada</span>
            </div>
        </div>
        
        {/* Notificación flotante detrás */}
        <div className="absolute -top-3 -right-3 h-6 w-6 bg-red-500 rounded-full border-2 border-[#06040F] flex items-center justify-center z-20">
            <span className="text-[10px] font-bold text-white">1</span>
        </div>
    </div>
);

// --- COMPONENTE DE PASOS (Protocolo) ---
const ProtocolStep = ({ number, title, desc }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-lg shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            {number}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-purple-200/60 leading-relaxed max-w-[250px]">{desc}</p>
    </div>
);

// --- FAQ ITEM ---
const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            initial={false}
            className={cn("overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors hover:border-purple-500/30", isOpen ? "border-purple-500/40 bg-purple-500/[0.05] shadow-purple-500/10" : "border-purple-500/10")}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className={cn("font-medium transition-colors", isOpen ? "text-purple-300" : "text-white")}>{q}</span>
                <span className={cn("ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all", isOpen ? "border-purple-500/50 bg-purple-500/20 text-purple-300 rotate-45" : "border-purple-500/20 bg-purple-500/10 text-purple-300/70")}>
                    <Plus size={16} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                    >
                        <p className="text-sm leading-relaxed text-purple-200/70">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


// === PÁGINA URGENCIAS ===
export default function Urgencias() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-red-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          {/* Glow Rojo/Violeta de Fondo para Urgencia */}
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-red-900/10 to-purple-900/10 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-pulse">
                    Código Rojo
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Respuesta Inmediata <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-purple-500">ante una Emergencia.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Un sistema de alerta médica que conecta tu ubicación con el servicio de ambulancia más cercano en segundos.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton variant="danger">
                          <span className="flex items-center gap-2">
                             <Siren size={18} /> Llamar Ambulancia
                          </span>
                      </PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20">
                          Ver cobertura
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: Botón Pánico (Grande) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#1a0505] to-[#1a103d] border-red-500/10 shadow-red-900/5">
                <div className="flex-1 z-20 max-w-lg p-4 pl-8">
                    <GlassIcon icon={Radio} color="red" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Botón de Pánico.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        En situaciones críticas, cada segundo cuenta. Presioná el botón en la App para disparar un alerta prioritaria a nuestra central médica.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto pr-0 md:pr-12 pb-8 md:pb-0"><PanicButtonUI /></div>
            </Card>

            {/* Bento 2: Geolocalización */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={MapPin} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Te encontramos</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Compartimos tus coordenadas GPS exactas con la unidad móvil para reducir el tiempo de llegada.
                    </p>
                </div>
                <GeoLocationRadar />
            </Card>

            {/* Bento 3: Seguimiento */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={Activity} color="indigo" />
                    <h3 className="text-xl font-bold text-white mb-2">Seguimiento en Vivo</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Mantené la calma sabiendo dónde está la ayuda. Visualizá el recorrido de la ambulancia en el mapa.
                    </p>
                 </div>
                 <AmbulanceStatus />
            </Card>

            {/* Bento 4: Integración (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4 px-8">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={PhoneCall} color="red" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Integración 911 / 107</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Si estás fuera de nuestra área de cobertura privada, la app te conecta automáticamente con los servicios de emergencia públicos locales, brindándoles tus datos médicos clave.
                    </p>
                </div>
                
                {/* Visual Data Médica */}
                <div className="w-[280px] h-[180px] bg-red-900/10 rounded-tl-2xl border-t border-l border-red-500/20 p-6 relative translate-y-4 translate-x-4 shadow-inner">
                     <div className="flex items-center gap-2 mb-3">
                         <ShieldAlert size={16} className="text-red-400" />
                         <span className="text-xs font-bold text-red-200 uppercase">Ficha de Emergencia</span>
                     </div>
                     <div className="space-y-2 opacity-80">
                         <div className="flex justify-between border-b border-red-500/10 pb-1">
                             <span className="text-[10px] text-white/50">Grupo Sanguíneo</span>
                             <span className="text-[10px] text-white font-bold">0+</span>
                         </div>
                         <div className="flex justify-between border-b border-red-500/10 pb-1">
                             <span className="text-[10px] text-white/50">Alergias</span>
                             <span className="text-[10px] text-white font-bold">Penicilina</span>
                         </div>
                         <div className="flex justify-between border-b border-red-500/10 pb-1">
                             <span className="text-[10px] text-white/50">Contacto</span>
                             <span className="text-[10px] text-white font-bold">Madre</span>
                         </div>
                     </div>
                </div>
            </Card>

        </div>
      </section>

      {/* 3. PROTOCOLO DE EMERGENCIA */}
      <section className="py-20 px-6 border-t border-purple-500/10 bg-[#080512]">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Protocolo de Acción</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
                  <ProtocolStep 
                    number="1"
                    title="Alerta"
                    desc="Presioná el botón de emergencia en la App. Nuestros operadores reciben tu ubicación y perfil médico."
                  />
                  <div className="hidden md:block mt-8 text-red-500/30"><ArrowRight size={24} /></div>
                  
                  <ProtocolStep 
                    number="2"
                    title="Triaje Telefónico"
                    desc="Te llamamos en segundos para evaluar la gravedad (Código Rojo, Amarillo o Verde) mientras despachamos la unidad."
                  />
                   <div className="hidden md:block mt-8 text-red-500/30"><ArrowRight size={24} /></div>

                  <ProtocolStep 
                    number="3"
                    title="Arribo y Traslado"
                    desc="La ambulancia llega a tu ubicación. Si es necesario, se coordina el traslado al centro médico más adecuado."
                  />
              </div>
          </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-24 px-6 border-t border-purple-500/10 bg-[#06040F]">
          <div className="mx-auto max-w-3xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
               </div>
               <div className="space-y-4">
                   <FAQItem 
                     q="¿Cuándo debo usar el botón de emergencia?"
                     a="Úsalo ante riesgo de vida o situaciones graves: dolor de pecho intenso, dificultad para respirar, pérdida de conocimiento, accidentes graves, hemorragias profusas."
                   />
                   <FAQItem 
                     q="¿Tiene costo adicional el traslado en ambulancia?"
                     a="Depende de tu plan. El Plan Familiar Premium incluye traslados de urgencia sin cargo. En planes base, puede tener un copago reducido."
                   />
                   <FAQItem 
                     q="¿Qué pasa si presiono el botón por error?"
                     a="No te preocupes. Nuestra central te llamará para confirmar. Si fue un error, simplemente informás al operador y cancelamos el despacho."
                   />
                   <FAQItem 
                     q="¿Funciona sin conexión a internet?"
                     a="La app necesita datos mínimos para enviar la geolocalización. Si no hay internet, la app te muestra un botón directo para llamar por línea telefónica tradicional al 0800 de urgencias."
                   />
               </div>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-xs text-purple-200/40 border-t border-purple-500/10">
          <p>© 2024 CelDoctor. Salud Digital Simplificada.</p>
      </footer>

    </div>
  );
}