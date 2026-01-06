import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Search,
  CalendarCheck,
  Star,
  UserCheck,
  Brain,
  Heart,
  Baby,
  ArrowRight,
  Plus,
  Filter,
  Check
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

// 2. Icono Glass
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

// --- ILUSTRACIONES CSS (Específicas de Cuadro Médico) ---

// 1. Interfaz de Búsqueda Inteligente
const SmartSearchUI = () => (
  <div className="relative z-10 mx-auto mt-6 w-[240px] h-[180px]">
      <div className="relative w-full bg-[#1e2538] rounded-xl border border-purple-500/20 shadow-2xl p-4 overflow-hidden">
           {/* Barra de Búsqueda */}
           <div className="flex items-center gap-2 bg-[#120D26] rounded-lg p-2 border border-purple-500/10 mb-4">
               <Search size={14} className="text-purple-400" />
               <div className="h-2 w-24 bg-purple-500/20 rounded animate-pulse" />
           </div>

           {/* Tags / Filtros */}
           <div className="flex flex-wrap gap-2 mb-4">
               <div className="px-2 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-[8px] text-fuchsia-300 font-bold">Cardiología</div>
               <div className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[8px] text-purple-300">Dermatología</div>
               <div className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[8px] text-purple-300">Pediatría</div>
           </div>

           {/* Resultado Simulado */}
           <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
               <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-400 to-fuchsia-400" />
               <div className="space-y-1">
                   <div className="h-2 w-20 bg-white/20 rounded" />
                   <div className="h-1.5 w-12 bg-white/10 rounded" />
               </div>
           </div>
           
           {/* Cursor flotante */}
           <div className="absolute bottom-4 right-8">
               <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white transform -rotate-45 drop-shadow-lg" />
           </div>
      </div>
  </div>
);

// 2. Tarjeta de Perfil Médico (Verificado)
const DoctorProfile = () => (
    <div className="relative mt-8 w-full max-w-[220px] mx-auto group">
        <div className="relative bg-[#1a1535] rounded-2xl p-5 border border-purple-500/10 shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
            {/* Avatar */}
            <div className="flex justify-center mb-4 relative">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 p-[2px]">
                    <div className="h-full w-full rounded-full bg-[#1a1535] flex items-center justify-center">
                        <UserCheck size={28} className="text-purple-300" />
                    </div>
                </div>
                <div className="absolute bottom-0 right-14 bg-emerald-500 rounded-full p-1 border-2 border-[#1a1535]">
                    <Check size={10} className="text-white" />
                </div>
            </div>
            
            {/* Info */}
            <div className="text-center space-y-2">
                <div className="h-2.5 w-32 bg-white/20 rounded mx-auto" />
                <div className="h-2 w-20 bg-purple-500/30 rounded mx-auto" />
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mt-4">
                {[1,2,3,4,5].map(i => (
                    <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                ))}
            </div>
        </div>
        
        {/* Tarjeta Fondo (Stack effect) */}
        <div className="absolute top-2 left-2 right-[-8px] bottom-[-8px] bg-purple-500/5 rounded-2xl -z-10 border border-purple-500/5" />
    </div>
);

// 3. Iconos de Especialidades (Grid)
const SpecialtyIcons = () => (
    <div className="relative h-[160px] w-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 rotate-12 opacity-80">
            {/* Item 1 */}
            <div className="h-16 w-16 bg-[#2a2f45] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg transform translate-y-4">
                <Heart size={24} className="text-fuchsia-400" />
            </div>
            {/* Item 2 */}
            <div className="h-16 w-16 bg-[#2a2f45] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg">
                <Brain size={24} className="text-purple-400" />
            </div>
            {/* Item 3 */}
            <div className="h-16 w-16 bg-[#2a2f45] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg transform -translate-y-4">
                <Baby size={24} className="text-indigo-400" />
            </div>
             {/* Item 4 */}
             <div className="h-16 w-16 bg-[#2a2f45] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg">
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20 mx-1" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
            </div>
        </div>
    </div>
);

// 4. Calendario de Turnos
const BookingCalendar = () => (
    <div className="relative w-[240px] h-[180px] bg-[#1e2538] rounded-xl border border-purple-500/20 p-4 shadow-xl translate-x-4 translate-y-4">
         <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
             <div className="text-xs text-white/50 font-bold">Enero 2024</div>
             <CalendarCheck size={14} className="text-purple-400" />
         </div>
         <div className="grid grid-cols-7 gap-2 text-center">
             {[...Array(14)].map((_, i) => (
                 <div key={i} className={`h-6 w-6 rounded flex items-center justify-center text-[10px] ${i === 8 ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/40 scale-110' : 'text-white/30'}`}>
                     {10 + i}
                 </div>
             ))}
         </div>
         {/* Tooltip 'Turno Confirmado' */}
         <div className="absolute top-[45%] left-[55%] bg-white text-[#06040F] text-[9px] font-bold px-2 py-1 rounded shadow-lg animate-bounce">
             Confirmado
         </div>
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

// --- LISTA DE ESPECIALIDADES SIMPLES ---
const specialties = [
    "Clínica Médica", "Pediatría", "Cardiología", "Dermatología",
    "Ginecología", "Nutrición", "Psicología", "Traumatología",
    "Oftalmología", "Urología", "Gastroenterología", "Neurología"
];


// === PÁGINA CUADRO MÉDICO ===
export default function CuadroMedico() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    Red de Prestadores
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Especialistas de <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">Primer Nivel.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Accedé a una cartilla médica completa, verificada y disponible. Desde consultas programadas hasta seguimiento de tratamientos.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Buscar especialista</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20">
                          Ver todas las especialidades
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: Buscador (Grande) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#1a103d] border-purple-500/10">
                <div className="flex-1 z-20 max-w-lg p-4 pl-8">
                    <GlassIcon icon={Search} color="fuchsia" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Encontrá lo que buscás.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        Filtrá por especialidad, cercanía, valoración o disponibilidad horaria. Nuestra búsqueda inteligente te conecta con el profesional ideal en segundos.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto pr-0 md:pr-12 pb-8 md:pb-0"><SmartSearchUI /></div>
            </Card>

            {/* Bento 2: Profesionales Verificados */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={UserCheck} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Verificados</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Todos nuestros profesionales pasan por un riguroso proceso de validación de matrícula y antecedentes.
                    </p>
                </div>
                <DoctorProfile />
            </Card>

            {/* Bento 3: Variedad */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={Stethoscope} color="indigo" />
                    <h3 className="text-xl font-bold text-white mb-2">+22 Especialidades</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Cubrimos todas las ramas de la medicina ambulatoria, salud mental y nutrición.
                    </p>
                 </div>
                 <SpecialtyIcons />
            </Card>

            {/* Bento 4: Agenda (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4 px-8">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={CalendarCheck} color="purple" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Turnos sin espera</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Visualizá la agenda del médico en tiempo real y reservá tu turno con un click. Recibí recordatorios automáticos para no olvidar tu consulta.
                    </p>
                </div>
                <BookingCalendar />
            </Card>

        </div>
      </section>

      {/* 3. LISTA RÁPIDA DE ESPECIALIDADES */}
      <section className="py-20 px-6 border-t border-purple-500/5 bg-[#080512]">
          <div className="mx-auto max-w-5xl text-center">
              <h3 className="text-xl font-bold text-white mb-8">Especialidades más consultadas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                  {specialties.map((spec, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-purple-200 hover:bg-purple-500/10 hover:border-purple-500/40 transition-colors cursor-default"
                      >
                          {spec}
                      </span>
                  ))}
                  <span className="px-4 py-2 rounded-full border border-dashed border-white/20 text-sm text-white/40">
                      + Ver todas
                  </span>
              </div>
          </div>
      </section>

      {/* 4. CÓMO FUNCIONA */}
      <section className="py-20 px-6 border-t border-purple-500/10">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Tu consulta en 3 pasos</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
                  <StepCard 
                    number="1"
                    title="Buscá"
                    desc="Elegí la especialidad o buscá al médico por nombre en nuestra cartilla digital."
                  />
                  <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>
                  
                  <StepCard 
                    number="2"
                    title="Agendá"
                    desc="Seleccioná el día y horario que mejor te convenga de la agenda disponible."
                  />
                   <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>

                  <StepCard 
                    number="3"
                    title="Asistí"
                    desc="Conectate a la videollamada a la hora pactada o acercate al consultorio."
                  />
              </div>
          </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-24 px-6 border-t border-purple-500/10 bg-[#06040F]">
          <div className="mx-auto max-w-3xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
               </div>
               <div className="space-y-4">
                   <FAQItem 
                     q="¿Necesito derivación para ver a un especialista?"
                     a="No. En CelDoctor podés agendar turno directo con especialistas (Dermatólogos, Cardiólogos, etc.) sin pasar por un clínico primero, a menos que tu plan específico lo requiera."
                   />
                   <FAQItem 
                     q="¿Son consultas presenciales o por video?"
                     a="La mayoría de nuestros especialistas ofrecen ambas modalidades. En el perfil de cada médico verás los iconos de 'Video' o 'Consultorio' para que elijas."
                   />
                   <FAQItem 
                     q="¿Puedo elegir al mismo médico siempre?"
                     a="Sí, fomentamos la continuidad. Podés agregar médicos a tus 'Favoritos' para agendar futuros controles con el mismo profesional."
                   />
                   <FAQItem 
                     q="¿Cuánto dura un turno programado?"
                     a="Los turnos programados suelen durar entre 20 y 30 minutos, permitiendo una evaluación más profunda que una guardia de urgencia."
                   />
               </div>
          </div>
      </section>
 
    </div>
  );
}