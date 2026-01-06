import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Clock,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  Plus,
  Wifi,
  Mic,
  PhoneOff,
  User,
  MessageSquare
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITIES ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS BASE ---

// 1. Tarjeta Base (Estilo Deep Purple)
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

// 2. Icono Glassmorphism
const GlassIcon = ({ icon: Icon, color = "purple" }) => (
  <div className={cn(
      "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-purple-500/20 backdrop-blur-md",
      color === "purple" ? "bg-purple-500/10 text-purple-300" : 
      color === "fuchsia" ? "bg-fuchsia-500/10 text-fuchsia-400" :
      "bg-indigo-500/10 text-indigo-400"
  )}>
    <Icon size={28} />
  </div>
);

// 3. Botón Principal
const PrimaryButton = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
    "group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#06040F] transition-all hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]", 
    className
  )}>
    {children}
    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
  </button>
);

// --- ILUSTRACIONES CSS (Específicas de Videollamada) ---

// 1. Interfaz de Videollamada (UI Móvil)
const VideoCallUI = () => (
  <div className="relative z-10 mx-auto mt-4 w-[200px] h-[300px]">
      {/* Marco del Teléfono */}
      <div className="absolute inset-0 bg-[#0f0c1d] rounded-[2rem] border-[6px] border-[#2e2b50] overflow-hidden shadow-2xl">
          {/* Pantalla de "Conectando..." / Doctor */}
          <div className="relative h-full w-full bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col">
               {/* Imagen Doctor (Overlay simulado) */}
               <div className="absolute inset-0 opacity-60">
                   <div className="w-full h-full bg-gradient-to-tr from-purple-900/40 to-indigo-900/40" />
                   {/* Silueta abstracta doctor */}
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-white/10 rounded-t-full blur-sm" />
                   <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/10 rounded-full blur-sm" />
               </div>

               {/* UI Overlay */}
               <div className="relative z-10 flex flex-col h-full justify-between p-4">
                   {/* Top Bar */}
                   <div className="flex justify-between items-center">
                       <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/5">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] text-white font-medium">En vivo 04:20</span>
                       </div>
                       <div className="bg-black/40 p-1.5 rounded-full border border-white/5">
                           <Wifi size={12} className="text-white" />
                       </div>
                   </div>

                   {/* Bottom Controls */}
                   <div className="flex justify-center gap-4 mb-4">
                       <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                           <Mic size={16} className="text-white" />
                       </div>
                       <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                           <Video size={16} className="text-white" />
                       </div>
                       <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                           <PhoneOff size={16} className="text-white" />
                       </div>
                   </div>
               </div>

               {/* PiP (Picture in Picture - Usuario) */}
               <div className="absolute top-16 right-4 w-16 h-20 bg-gray-900 rounded-lg border border-white/20 shadow-lg overflow-hidden">
                   <div className="w-full h-full bg-purple-500/20 flex items-center justify-center">
                       <User size={12} className="text-white/50" />
                   </div>
               </div>
          </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-purple-500/20 blur-[60px] -z-10" />
  </div>
);

// 2. Radar de Búsqueda (Wait Time)
const SearchingRadar = () => (
    <div className="relative h-[160px] w-full flex items-center justify-center overflow-hidden">
        {/* Círculos concéntricos */}
        <div className="absolute w-[200px] h-[200px] border border-purple-500/10 rounded-full animate-ping-slow" />
        <div className="absolute w-[140px] h-[140px] border border-purple-500/20 rounded-full animate-ping-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute w-[80px] h-[80px] border border-fuchsia-500/30 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }} />
        
        {/* Centro */}
        <div className="relative z-10 h-16 w-16 bg-[#1a103d] rounded-full border border-purple-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="text-xl font-bold text-white">15'</span>
            <div className="absolute -bottom-6 text-[10px] text-purple-300 uppercase tracking-widest">Promedio</div>
        </div>

        <style>{`
          .animate-ping-slow {
            animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
        `}</style>
    </div>
);

// 3. Encriptación / Privacidad
const SecurityLock = () => (
    <div className="relative mt-4 w-full h-[140px] flex items-center justify-center">
        <div className="relative z-10">
            <div className="h-16 w-12 border-4 border-emerald-400/80 rounded-t-full mx-auto mb-[-10px]" />
            <div className="h-20 w-24 bg-[#1e2538] border border-emerald-500/30 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 pattern-grid-sm" />
                <div className="h-3 w-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
            </div>
        </div>
        
        {/* Partículas Flotantes */}
        <div className="absolute top-1/2 left-1/4 h-1 w-1 bg-emerald-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}/>
    </div>
);

// --- COMPONENTE DE PASOS ---
const StepCard = ({ number, title, desc }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.15)]">
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


// === PÁGINA VIDEOLLAMADA ===
export default function Videollamada() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    Guardia Digital 24/7
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Un médico en línea <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">cuando lo necesitás.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Sin traslados y sin salas de espera. Consultá por síntomas comunes, gripe, alergias o pediatría desde la comodidad de tu casa.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Iniciar consulta</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20">
                          Ver síntomas frecuentes
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID DE CARACTERÍSTICAS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: Experiencia Principal (Grande) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#1a103d] border-purple-500/10">
                <div className="flex-1 z-20 max-w-lg p-4 pl-8">
                    <GlassIcon icon={Video} color="fuchsia" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Consultorio en tu Bolsillo.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        Tecnología de video HD estable, incluso con 4G. Hablá cara a cara con el profesional, mostrale síntomas visibles y recibí indicaciones claras.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto pr-0 md:pr-12 pb-8 md:pb-0"><VideoCallUI /></div>
            </Card>

            {/* Bento 2: Tiempo de Espera */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={Clock} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Rapidez Real</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Nuestro sistema de triaje inteligente te conecta con el primer médico disponible en un promedio de 15 minutos.
                    </p>
                </div>
                <SearchingRadar />
            </Card>

            {/* Bento 3: Privacidad */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={ShieldCheck} color="emerald" />
                    <h3 className="text-xl font-bold text-white mb-2">100% Confidencial</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Conexión encriptada de extremo a extremo. Tu consulta queda registrada en tu historia clínica privada y segura.
                    </p>
                 </div>
                 <SecurityLock />
            </Card>

            {/* Bento 4: Especialidades (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4 px-8">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={Stethoscope} color="indigo" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Clínica y Pediatría</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Resolvemos patologías de baja complejidad para adultos y niños. Desde un resfrío o dolor de garganta, hasta erupciones cutáneas o consultas preventivas.
                    </p>
                </div>
                
                {/* Visual Especialidades */}
                <div className="w-[280px] h-[180px] bg-purple-900/10 rounded-tl-2xl border-t border-l border-purple-500/20 p-6 relative translate-y-4 translate-x-4 shadow-inner">
                     <div className="grid grid-cols-2 gap-3">
                         {["Gripe", "Alergias", "Pediatría", "Gastro", "Piel", "Dudas"].map((item, i) => (
                             <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5">
                                 <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                                 <span className="text-xs text-purple-200/80">{item}</span>
                             </div>
                         ))}
                     </div>
                </div>
            </Card>

        </div>
      </section>

      {/* 3. CÓMO FUNCIONA (STEPS) */}
      <section className="py-20 px-6 border-t border-purple-500/10 bg-[#080512]">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Atención médica en 3 toques</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
                  <StepCard 
                    number="1"
                    title="Ingresá a la Guardia"
                    desc="Abrí la app y tocá el botón 'Guardia 24hs'. Seleccioná si es para vos o un familiar."
                  />
                  <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>
                  
                  <StepCard 
                    number="2"
                    title="Sala de Espera Virtual"
                    desc="El sistema busca al médico disponible. Te avisamos cuando está listo para atenderte."
                  />
                   <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>

                  <StepCard 
                    number="3"
                    title="Videoconsulta"
                    desc="Hablá con el profesional. Al finalizar, recibís el diagnóstico, receta o certificado en la app."
                  />
              </div>

              <div className="mt-16 flex justify-center">
                  <PrimaryButton>Entrar a Guardia</PrimaryButton>
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
                     q="¿Qué tipo de consultas puedo realizar?"
                     a="Ideal para 'Código Verde' (baja complejidad): resfríos, dolor de garganta, alergias leves, erupciones, problemas gastrointestinales simples, dudas sobre medicación."
                   />
                   <FAQItem 
                     q="¿Atienden urgencias de vida o muerte?"
                     a="NO. Si sentís dolor de pecho fuerte, dificultad respiratoria grave o tuviste un accidente, debés llamar al servicio de emergencias (107/911) o ir a una guardia física de inmediato."
                   />
                   <FAQItem 
                     q="¿El médico puede recetar antibióticos?"
                     a="Sí, si el criterio médico lo justifica tras la evaluación por video. La receta digital te llega a la app al instante."
                   />
                   <FAQItem 
                     q="¿Funciona los fines de semana?"
                     a="Sí, el servicio de guardia funciona las 24 horas, los 365 días del año, incluidos feriados y fines de semana."
                   />
               </div>
          </div>
      </section>
    </div>
  );
}