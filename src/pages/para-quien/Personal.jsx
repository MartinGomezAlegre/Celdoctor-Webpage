import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Users,
  Search,
  Check,
  ArrowRight,
  Plus
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITIES ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS BASE ---

// 1. Tarjeta Base (Estilo Unificado - Gradient Deep Purple)
const Card = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative overflow-hidden rounded-[2.5rem]",
      "bg-gradient-to-br from-[#120D26] via-[#161030] to-[#1F1746]", 
      "border border-white/5 shadow-2xl",
      className
    )}
  >
    {children}
  </motion.div>
);

// 2. Icono con caja de cristal (Glassmorphism)
const GlassIcon = ({ icon: Icon, color = "purple" }) => (
  <div className={cn(
      "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/10 backdrop-blur-md",
      color === "green" ? "bg-emerald-500/10 text-emerald-400" : "bg-purple-500/10 text-purple-300"
  )}>
    <Icon size={28} />
  </div>
);

// 3. Botón Principal
const PrimaryButton = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
    "group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#06040F] transition-all hover:bg-indigo-50 hover:scale-[1.02]", 
    className
  )}>
    {children}
    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
  </button>
);

// --- ILUSTRACIONES (Construidas con CSS) ---

const PhoneIllustration = () => (
  <div className="relative z-10 mx-auto mt-4 h-[300px] w-[180px] md:mt-0 md:mr-4 lg:h-[320px] lg:w-[190px]">
    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-[8px] border-[#252042] bg-[#1a1535] shadow-2xl">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-xl bg-[#252042]" />
        <div className="relative h-full w-full bg-indigo-900/30">
            {/* Imagen del doctor con overlay para integración perfecta */}
            <img 
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740&t=st=1709664000~exp=1709664600~hmac=98a0c0c0c0c0c0c0c0" 
                alt="Doctor" 
                className="h-full w-full object-cover opacity-90 mix-blend-overlay"
                style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1535] via-transparent to-transparent" />
            
            {/* Elemento decorativo del doctor */}
             <img src="https://cdn-icons-png.flaticon.com/512/3063/3063176.png" alt="Doctor Vector" className="absolute bottom-[-10px] left-1/2 w-40 -translate-x-1/2 drop-shadow-2xl"/>
            
            {/* Notificación flotante */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute left-[-20px] top-24 z-30 rounded-xl rounded-tl-none bg-emerald-500 p-3 shadow-lg">
                <div className="space-y-1.5"><div className="h-2 w-16 rounded-full bg-white/40" /><div className="h-2 w-10 rounded-full bg-white/40" /></div>
            </motion.div>
        </div>
    </div>
  </div>
);

const RxCard = () => (
  <div className="mt-8 w-full rounded-2xl bg-[#1e2538] p-5 shadow-2xl ring-1 ring-white/5 relative overflow-hidden group hover:ring-white/10 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
      <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3"><span className="text-3xl font-serif italic font-bold text-white/90">Rx</span><div className="space-y-2"><div className="h-1.5 w-12 rounded-full bg-white/20" /><div className="h-1.5 w-8 rounded-full bg-white/20" /></div></div>
          <div className="h-2 w-8 rounded-full bg-white/10" />
      </div>
      <div className="relative flex w-full items-center justify-center rounded-xl bg-white py-3 transition-transform hover:scale-[1.02] cursor-pointer shadow-lg"><span className="text-xs font-bold text-slate-900">Obtener ahora</span></div>
  </div>
);

const FamilyDashboard = () => (
    <div className="relative h-full w-full min-h-[180px] overflow-hidden rounded-tl-2xl bg-[#1D1F36] border-t border-l border-white/10 shadow-2xl">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#15172B] border-r border-white/5 flex flex-col items-center py-4 gap-3">
             <div className="h-6 w-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center"><Users size={14} /></div>
             <div className="h-1 w-4 rounded bg-white/10 mt-2" /><div className="h-1 w-4 rounded bg-white/10" /><div className="h-1 w-4 rounded bg-white/10" />
        </div>
        <div className="ml-12 p-5">
            <div className="flex justify-between items-center mb-6"><div className="h-2 w-20 rounded bg-white/20" /><div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center"><Search size={12} className="text-white/50" /></div></div>
            <div className="rounded-xl bg-[#262A45] p-4 border border-white/5 flex flex-col items-center shadow-lg">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 mb-3 shadow-lg" /><div className="h-2 w-16 rounded bg-white/30 mb-2" /><div className="flex gap-2 w-full mt-2"><div className="h-8 flex-1 rounded bg-white/5" /><div className="h-8 flex-1 rounded bg-white/5" /></div>
            </div>
        </div>
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
);

const DocsStack = () => (
    <div className="relative h-32 w-32 perspective-[1000px]">
        <div className="absolute top-4 left-4 h-24 w-24 rounded-2xl bg-[#2a2f45] opacity-40 transform rotate-12" />
        <div className="absolute top-2 left-2 h-24 w-24 rounded-2xl bg-[#333955] opacity-70 transform rotate-6 border border-white/5" />
        <div className="absolute top-0 left-0 h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-3 shadow-xl flex flex-col gap-2">
            <div className="flex justify-between items-center opacity-50"><div className="h-1.5 w-8 rounded bg-white" /><div className="h-3 w-3 rounded-sm bg-blue-400" /></div>
            <div className="space-y-1.5 mt-2"><div className="h-1 w-full rounded bg-white/20" /><div className="h-1 w-3/4 rounded bg-white/20" /><div className="h-1 w-full rounded bg-white/20" /></div>
            <div className="mt-auto h-1.5 w-1/2 rounded bg-purple-400/50" />
        </div>
    </div>
);

// --- COMPONENTE DE PLANES ---
const PlanCard = ({ title, price, features, recommended = false }) => (
    <Card className={cn("flex flex-col p-8 transition-transform duration-300 hover:scale-[1.01]", recommended ? "border-purple-500/30 ring-1 ring-purple-500/20" : "")}>
        {recommended && (
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-purple-500 px-4 py-1 text-xs font-bold text-white">RECOMENDADO</div>
        )}
        <div className="mb-8">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">{price}</span>
                <span className="text-sm text-indigo-200/50">/mes</span>
            </p>
        </div>
        <ul className="mb-8 flex-1 space-y-4">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-indigo-200/70">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <Check size={10} />
                    </div>
                    {feat}
                </li>
            ))}
        </ul>
        <button className={cn(
            "w-full rounded-xl py-4 text-sm font-bold transition-all",
            recommended ? "bg-white text-[#06040F] hover:bg-indigo-50" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
        )}>
            Elegir {title}
        </button>
    </Card>
);

// --- FAQ ACORDEÓN ---
const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            initial={false}
            className={cn("overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors", isOpen ? "border-purple-500/30 bg-purple-500/[0.03]" : "border-white/5")}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className={cn("font-medium", isOpen ? "text-purple-300" : "text-white")}>{q}</span>
                <span className={cn("ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all", isOpen ? "border-purple-500/50 bg-purple-500/20 text-purple-300 rotate-45" : "border-white/10 bg-white/5 text-white")}>
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
                        <p className="text-sm leading-relaxed text-indigo-200/60">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


// === PÁGINA PRINCIPAL ===
export default function Personal() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION (Padding ajustado, sin navbar gap) */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          {/* Fondo Ambiente Glow */}
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300">
                    Portal Unificado
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Ingresá a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">CelDoctor.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-indigo-200/60 mb-10 leading-relaxed">
                    Gestioná tu salud con una visión integral. Atención digital inmediata, recetas en el acto y seguimiento profesional desde un solo lugar.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Ver planes ahora</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition hover:text-purple-300">
                          Cómo funciona
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENEFICIOS (BENTO GRID - DISEÑO REPLICADO) */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card Grande: Médico */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group">
                <div className="flex-1 z-20 max-w-lg">
                    <GlassIcon icon={Smartphone} color="purple" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">El médico en tu bolsillo.</h2>
                    <p className="text-indigo-200/60 text-lg leading-relaxed">Sin salas de espera. Abrís la app y en minutos tenés a un profesional atendiéndote por videollamada.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end"><PhoneIllustration /></div>
            </Card>

            {/* Card: Recetas */}
            <Card className="flex flex-col justify-between" delay={0.1}>
                <div>
                    <GlassIcon icon={Zap} color="green" />
                    <h3 className="text-xl font-bold text-white mb-2">Recetas al instante</h3>
                    <p className="text-sm text-indigo-200/50 leading-relaxed">Recibí tu receta digital válida en farmacias de todo el país apenas corta la llamada.</p>
                </div>
                <RxCard />
            </Card>

            {/* Card: Historial */}
            <Card className="flex flex-row items-center gap-4 overflow-visible" delay={0.2}>
                <div className="flex-1 z-10 pl-2">
                    <GlassIcon icon={ShieldCheck} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Historial Seguro</h3>
                    <p className="text-xs text-indigo-200/50 leading-relaxed pr-2">Nunca más repitas tu historia. Tus diagnósticos y recetas quedan guardados.</p>
                </div>
                <div className="w-[100px] flex-shrink-0 -mr-4"><DocsStack /></div>
            </Card>

            {/* Card: Cobertura Familiar */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0" delay={0.3}>
                <div className="flex-1 py-4">
                    <h3 className="text-2xl font-bold text-white mb-3">Cobertura Familiar Inteligente</h3>
                    <p className="text-indigo-200/60 max-w-sm">Gestioná la salud de tus hijos o pareja desde un único panel de control. Turnos pediátricos simplificados.</p>
                </div>
                <div className="w-full md:w-[280px] h-[200px] self-end translate-y-2 translate-x-2"><FamilyDashboard /></div>
            </Card>
        </div>
      </section>

      {/* 3. PLANES */}
      <section className="py-24 px-6 relative">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">Elegí tu nivel de cobertura</h2>
                  <p className="text-indigo-200/50">Precios transparentes para que accedas a la medicina que merecés.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <PlanCard 
                    title="Personal"
                    price="$8.500"
                    features={["Atención médica ilimitada", "Recetas digitales", "Historial clínico app", "1 usuario"]}
                  />
                  <PlanCard 
                    title="Grupo Familiar"
                    price="$22.000"
                    features={["Hasta 4 integrantes", "Pediatría incluida", "Gestión unificada", "Soporte Prioritario"]}
                    recommended={true}
                  />
              </div>
          </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#080512]">
          <div className="mx-auto max-w-3xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
               </div>
               <div className="space-y-4">
                   <FAQItem 
                     q="¿Cómo funciona el descuento en farmacias?"
                     a="Es automático. Mostrás el QR desde la App en la caja. Si la farmacia no tiene lector QR, mostrás el código de barras o numérico que aparece debajo."
                   />
                   <FAQItem 
                     q="¿Sirve como Obra Social?"
                     a="CelDoctor es un complemento prestacional. Resolvemos el 80% de las necesidades cotidianas (clínica, pediatría, recetas) sin esperas, pero no cubrimos internaciones complejas."
                   />
                   <FAQItem 
                     q="¿Tengo que pagar copagos?"
                     a="No. Tu abono mensual cubre el acceso a la plataforma. Las consultas de guardia clínica están bonificadas dentro de tu plan."
                   />
                   <FAQItem 
                     q="¿Puedo darme de baja cuando quiera?"
                     a="Sí, no tenemos contratos de permanencia. Podés cancelar tu suscripción desde la configuración de la cuenta en cualquier momento."
                   />
               </div>
          </div>
      </section>
      
    </div>
  );
}