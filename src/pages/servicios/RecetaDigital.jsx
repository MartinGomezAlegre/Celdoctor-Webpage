import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSignature,
  QrCode,
  Store,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Plus,
  Smartphone,
  FileCheck
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
      "bg-emerald-500/10 text-emerald-400"
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

// --- ILUSTRACIONES CSS (Receta Digital) ---

// 1. La Receta Médica Detallada
const PrescriptionIllustration = () => (
  <div className="relative z-10 mx-auto mt-6 w-full max-w-[280px] perspective-[1000px]">
      <div className="relative w-full bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] border border-gray-200">
          {/* Header Receta */}
          <div className="bg-purple-50 p-4 border-b border-purple-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-purple-600 flex items-center justify-center text-white font-serif italic font-bold">Rx</div>
                  <div className="h-2 w-16 rounded bg-purple-200" />
              </div>
              <div className="h-2 w-8 rounded bg-purple-200" />
          </div>
          
          {/* Cuerpo Receta */}
          <div className="p-5 space-y-4">
              {/* Datos Paciente */}
              <div className="space-y-1.5">
                  <div className="h-1.5 w-10 rounded bg-gray-200" />
                  <div className="h-2 w-32 rounded bg-gray-800" />
              </div>
              
              {/* Medicamento */}
              <div className="py-3 border-t border-b border-dashed border-gray-200 space-y-2">
                  <div className="flex justify-between">
                      <div className="h-3 w-40 rounded bg-purple-900" />
                      <div className="h-3 w-8 rounded bg-gray-300" />
                  </div>
                  <div className="h-2 w-24 rounded bg-gray-400" />
              </div>

              {/* Firma y Sello */}
              <div className="flex justify-between items-end pt-2">
                  <div className="space-y-1">
                      <div className="h-8 w-16 rounded bg-blue-100/50 border border-blue-200 flex items-center justify-center text-[8px] text-blue-500 font-bold transform -rotate-12">
                          VALIDADO
                      </div>
                  </div>
                  <div className="text-right space-y-1">
                      <div className="h-6 w-20 bg-gray-100 rounded ml-auto relative overflow-hidden">
                           {/* Garabato firma */}
                           <svg viewBox="0 0 100 30" className="absolute inset-0 w-full h-full text-gray-400">
                               <path d="M10,15 Q30,5 50,15 T90,15" fill="none" stroke="currentColor" strokeWidth="2" />
                           </svg>
                      </div>
                      <div className="h-1 w-24 bg-gray-300 rounded" />
                      <div className="h-1 w-16 bg-gray-200 rounded ml-auto" />
                  </div>
              </div>
          </div>

          {/* Footer QR */}
          <div className="bg-gray-50 p-3 flex items-center justify-between border-t border-gray-200">
              <div className="h-12 w-12 bg-white border border-gray-200 rounded p-1">
                  <div className="w-full h-full bg-gray-800 opacity-10 pattern-grid-lg" />
                  <QrCode size={38} className="text-black" />
              </div>
              <div className="text-right space-y-1">
                   <div className="h-1.5 w-20 bg-gray-300 rounded ml-auto" />
                   <div className="h-1.5 w-12 bg-gray-300 rounded ml-auto" />
              </div>
          </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 blur-[60px] pointer-events-none" />
  </div>
);

// 2. Ilustración: Farmacia / Red
const PharmacyNetwork = () => (
    <div className="relative mt-8 w-full max-w-[260px] mx-auto h-[160px] flex items-center justify-center">
        {/* Farmacia Central */}
        <div className="relative z-20 h-20 w-20 bg-[#1e2538] rounded-2xl border border-purple-500/30 flex flex-col items-center justify-center shadow-2xl">
            <Store className="text-purple-300 mb-1" size={24} />
            <div className="h-1 w-8 bg-white/20 rounded" />
            {/* Badge Check */}
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-500 rounded-full border-2 border-[#1e2538] flex items-center justify-center">
                <CheckCircle2 size={14} className="text-white" />
            </div>
        </div>

        {/* Tarjetas flotantes (Red) */}
        <div className="absolute top-4 left-4 h-12 w-12 bg-[#2a2f45] rounded-xl border border-white/5 opacity-60 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-4 right-4 h-14 w-14 bg-[#2a2f45] rounded-xl border border-white/5 opacity-60 animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute top-8 right-2 h-10 w-10 bg-[#2a2f45] rounded-xl border border-white/5 opacity-40" />

        {/* Conectores */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="white" strokeDasharray="4" />
            <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="white" strokeDasharray="4" />
        </svg>
    </div>
);

// 3. Sello Legal (Ley 27.553)
const LegalStamp = () => (
    <div className="relative h-[150px] w-full flex items-center justify-center">
        <div className="relative h-28 w-28 rounded-full border-2 border-dashed border-fuchsia-500/30 flex items-center justify-center animate-spin-slow">
             <div className="absolute inset-2 rounded-full border border-fuchsia-500/20" />
        </div>
        <div className="absolute z-10 flex flex-col items-center">
            <ShieldCheck size={32} className="text-fuchsia-400 mb-1" />
            <span className="text-[10px] font-bold text-fuchsia-200 tracking-widest uppercase">Ley 27.553</span>
            <span className="text-[8px] text-fuchsia-200/60">VÁLIDA</span>
        </div>
    </div>
);

// --- COMPONENTE DE PASOS (How it works) ---
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


// === PÁGINA RECETA DIGITAL ===
export default function RecetaDigital() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    100% Legal • Ley 27.553
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Tu receta médica <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">en tu celular, ahora.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Sin papeles, sin filas y aceptada en todas las farmacias del país. Obtené tu prescripción médica digital con firma electrónica certificada en minutos.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Solicitar receta</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20">
                          Ver farmacias adheridas
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID DE CARACTERÍSTICAS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: La Receta (Visual Principal) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#1a103d] border-purple-500/10">
                <div className="flex-1 z-20 max-w-lg p-4 pl-8">
                    <GlassIcon icon={FileSignature} color="purple" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Validez Nacional Garantizada.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        Nuestras recetas cumplen con todos los estándares de seguridad y firma digital requeridos por el Ministerio de Salud.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto pr-0 md:pr-8 pb-8 md:pb-0"><PrescriptionIllustration /></div>
            </Card>

            {/* Bento 2: Aceptación */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={Store} color="fuchsia" />
                    <h3 className="text-xl font-bold text-white mb-2">Todas las Farmacias</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        No importa si es una gran cadena o la farmacia de tu barrio. Si aceptan obras sociales, aceptan nuestra receta.
                    </p>
                </div>
                <PharmacyNetwork />
            </Card>

            {/* Bento 3: Seguridad Legal */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={ShieldCheck} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Seguridad Total</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Trazabilidad completa. El código QR único previene duplicaciones y fraudes, protegiendo tu salud.
                    </p>
                 </div>
                 <LegalStamp />
            </Card>

            {/* Bento 4: Historial/Ecológico (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4 px-8">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={Clock} color="fuchsia" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Nunca más pierdas una receta</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Tus prescripciones quedan guardadas en la nube. Podés reenviarlas a la farmacia, descargarlas o consultar tu historial de medicación cuando quieras. Además, ayudamos al planeta eliminando el papel.
                    </p>
                </div>
                
                {/* Visual Historial */}
                <div className="w-[250px] h-[180px] bg-purple-900/10 rounded-tl-2xl border-t border-l border-purple-500/20 p-6 relative translate-y-4 translate-x-4 shadow-inner">
                     <div className="space-y-3 opacity-60">
                         {[1,2,3].map(i => (
                             <div key={i} className="flex items-center gap-3 border-b border-purple-500/10 pb-2">
                                 <div className="h-8 w-8 rounded bg-purple-500/20 flex items-center justify-center"><FileCheck size={14} className="text-purple-300"/></div>
                                 <div className="flex-1">
                                     <div className="h-1.5 w-16 bg-purple-200/20 rounded mb-1"/>
                                     <div className="h-1 w-10 bg-purple-200/10 rounded"/>
                                 </div>
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
                  <h2 className="text-3xl font-bold text-white mb-4">Conseguí tu medicación en 3 pasos</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
                  <StepCard 
                    number="1"
                    title="Pedí la receta"
                    desc="Ingresá a la app, seleccioná 'Recetas' y completá una breve solicitud con tu medicación habitual."
                  />
                  {/* Conector Visual (solo desktop) */}
                  <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>
                  
                  <StepCard 
                    number="2"
                    title="Validación Médica"
                    desc="Un médico revisa tu historial y aprueba la solicitud en minutos. Te llega una notificación."
                  />
                   <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>

                  <StepCard 
                    number="3"
                    title="Mostrá y Comprá"
                    desc="Abrís la receta en tu celular (QR), la mostrás en la farmacia y listo. Te llevás tu medicamento."
                  />
              </div>

              <div className="mt-16 flex justify-center">
                  <PrimaryButton>Empezar ahora</PrimaryButton>
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
                     q="¿Sirve para medicamentos psicotrópicos o archivados?"
                     a="Sí. Nuestra plataforma emite recetas duplicadas digitales válidas para psicotrópicos, siguiendo la normativa vigente de firma digital."
                   />
                   <FAQItem 
                     q="¿Cuánto tiempo de validez tiene la receta?"
                     a="Generalmente 30 días para medicamentos comunes y 10 días para antibióticos, dependiendo de la regulación local y el tipo de droga."
                   />
                   <FAQItem 
                     q="¿Puedo pedir recetas para un familiar?"
                     a="Sí, a través del Plan Familiar podés gestionar las recetas de tus hijos o padres desde tu misma cuenta."
                   />
               </div>
          </div>
      </section>
  
    </div>
  );
}