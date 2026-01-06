import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Plus,
  FileSpreadsheet
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITIES ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS BASE ---

// 1. Tarjeta Base (Estilo Unificado - Deep Purple Gradient)
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

// 2. Icono Glassmorphism (Violeta Predeterminado)
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

// 3. Botón Principal (Hover Violeta)
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

// --- ILUSTRACIONES CSS (Corporativo / B2B - Paleta Violeta) ---

// 1. Dashboard de Métricas
const DashboardIllustration = () => (
  <div className="relative z-10 mt-6 h-[260px] w-full max-w-[320px] mx-auto md:mr-0 perspective-[1000px]">
     <div className="relative h-full w-full rounded-tl-2xl bg-[#1a1535] border-t border-l border-purple-500/20 shadow-2xl p-4 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <div className="h-2 w-24 rounded-full bg-purple-500/20" />
            <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-white/5" />
                <div className="h-6 w-6 rounded-full bg-purple-500/30" />
            </div>
        </div>
        
        {/* Gráfico */}
        <div className="mb-6 space-y-2">
            <div className="flex items-end justify-between h-24 w-full gap-2 px-2 border-b border-purple-500/10 pb-2">
                 <div className="w-1/6 bg-gradient-to-t from-purple-900/20 to-transparent rounded-t h-[40%]" />
                 <div className="w-1/6 bg-gradient-to-t from-purple-800/30 to-transparent rounded-t h-[60%]" />
                 <div className="w-1/6 bg-gradient-to-t from-purple-700/40 to-transparent rounded-t h-[50%]" />
                 <div className="w-1/6 bg-gradient-to-t from-purple-600/50 to-transparent rounded-t h-[80%]" />
                 <div className="w-1/6 bg-gradient-to-t from-purple-500/60 to-transparent rounded-t h-[70%]" />
                 <div className="w-1/6 bg-gradient-to-t from-fuchsia-500 to-purple-500 rounded-t h-[90%] relative shadow-[0_0_15px_rgba(192,38,211,0.4)]">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-purple-950 text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                        -35% Ausentismo
                    </div>
                 </div>
            </div>
        </div>

        {/* Lista */}
        <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-purple-500/10">
                <div className="h-8 w-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-300"><Users size={14}/></div>
                <div className="flex-1 space-y-1"><div className="h-1.5 w-20 rounded bg-purple-500/30" /><div className="h-1.5 w-12 rounded bg-purple-500/10" /></div>
            </div>
             <div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-purple-500/10">
                <div className="h-8 w-8 rounded bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-300"><CheckCircle2 size={14}/></div>
                <div className="flex-1 space-y-1"><div className="h-1.5 w-16 rounded bg-purple-500/30" /><div className="h-1.5 w-10 rounded bg-purple-500/10" /></div>
            </div>
        </div>
     </div>
     {/* Glow effect */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 blur-[100px] pointer-events-none" />
  </div>
);

// 2. Tarjeta Empleados (Nómina)
const PayrollCard = () => (
    <div className="relative mt-8 w-full max-w-[240px] mx-auto rounded-xl bg-[#1e2538] p-4 ring-1 ring-purple-500/20 shadow-2xl shadow-purple-900/20 overflow-hidden group hover:ring-purple-500/40 transition-all">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
         <div className="relative mb-4 flex justify-between items-center">
             <span className="text-xs font-bold text-purple-200/60 uppercase tracking-wider">Nómina Activa</span>
             <div className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_10px_rgba(232,121,249,0.5)]" />
         </div>
         <div className="space-y-3">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-3 border-b border-purple-500/10 pb-2 last:border-0">
                     <div className={`h-8 w-8 rounded-full ${i===1 ? 'bg-purple-500' : i===2 ? 'bg-fuchsia-500' : 'bg-indigo-500'} opacity-80 ring-1 ring-white/20`} />
                     <div className="flex-1">
                         <div className="h-2 w-20 rounded bg-purple-200/30 mb-1" />
                         <div className="h-1.5 w-12 rounded bg-purple-200/10" />
                     </div>
                     <div className="h-4 w-4 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/10">
                         <CheckCircle2 size={10} className="text-fuchsia-400" />
                     </div>
                 </div>
             ))}
         </div>
         <div className="mt-4 flex justify-center">
             <div className="h-1 w-12 rounded-full bg-purple-500/20" />
         </div>
    </div>
);

// 3. Ilustración ROI (Gráfico de barras)
const ROIGraph = () => (
    <div className="relative h-[140px] w-full flex items-end justify-center gap-3 px-4 pb-2">
        <div className="w-8 bg-purple-900/40 rounded-t-lg h-[40%] relative group border-t border-x border-purple-500/10">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-purple-300/60 opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
        </div>
        <div className="w-8 bg-purple-800/40 rounded-t-lg h-[55%] relative group border-t border-x border-purple-500/20">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-purple-300/60 opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
        </div>
        <div className="w-8 bg-purple-700/40 rounded-t-lg h-[70%] relative group border-t border-x border-purple-500/30">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-purple-300/60 opacity-0 group-hover:opacity-100 transition-opacity">Q3</div>
        </div>
        {/* Barra Destacada (Fuchsia Glow) */}
        <div className="w-8 bg-gradient-to-t from-fuchsia-600 to-purple-500 rounded-t-lg h-[95%] relative shadow-[0_0_25px_rgba(192,38,211,0.5)]">
             <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white/40">
                 <ArrowRight size={12} className="-rotate-45" />
             </div>
        </div>
    </div>
);


// --- PLANES CORPORATIVOS ---
const CorporatePlan = ({ title, desc, features, recommended = false }) => (
    <Card className={cn("flex flex-col p-8 transition-transform duration-300 hover:scale-[1.01] hover:shadow-purple-500/20", recommended ? "border-purple-500/40 ring-1 ring-purple-500/30 shadow-purple-500/10" : "")}>
        {recommended && (
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-1 text-xs font-bold text-white shadow-lg">POPULAR</div>
        )}
        <div className="mb-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-purple-200/70 leading-relaxed">{desc}</p>
        </div>
        <div className="my-6 h-px w-full bg-purple-500/20" />
        <ul className="mb-8 flex-1 space-y-4">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-purple-200/80">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                        <CheckCircle2 size={12} />
                    </div>
                    {feat}
                </li>
            ))}
        </ul>
        <button className={cn(
            "w-full rounded-xl py-4 text-sm font-bold transition-all",
            recommended ? "bg-white text-purple-950 hover:bg-purple-50 shadow-purple-500/20 hover:shadow-lg" : "border border-purple-500/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20"
        )}>
            Solicitar cotización
        </button>
    </Card>
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


// === PÁGINA EMPRESAS (PRINCIPAL) ===
export default function Empresas() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          {/* Glow Violeta de Fondo */}
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    Soluciones Corporativas
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Salud para equipos de <br className="hidden md:block"/>
                    {/* Gradiente de texto Violeta -> Fucsia */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">Alto Rendimiento.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Reducí el ausentismo y mejorá la productividad con una plataforma de telemedicina que tus empleados realmente van a usar.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Agendar Demo</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20">
                          Ver casos de éxito
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID DE BENEFICIOS B2B */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: Panel de Control */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#1a103d] border-purple-500/10">
                <div className="flex-1 z-20 max-w-lg p-4">
                    <GlassIcon icon={BarChart3} color="purple" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Control total del ausentismo.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        Dashboard en tiempo real. Visualizá métricas de salud, detectá patrones y recibí reportes automáticos para tomar decisiones.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto"><DashboardIllustration /></div>
            </Card>

            {/* Bento 2: Gestión Simple */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={Users} color="fuchsia" />
                    <h3 className="text-xl font-bold text-white mb-2">Altas y bajas en 1 click</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Gestioná la nómina de empleados sin burocracia. Escalable de 10 a 10.000 colaboradores.
                    </p>
                </div>
                <PayrollCard />
            </Card>

            {/* Bento 3: ROI */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={TrendingUp} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">ROI Medible</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Menos días perdidos por enfermedad y trámites. Recuperá tu inversión en el primer trimestre.
                    </p>
                 </div>
                 <ROIGraph />
            </Card>

            {/* Bento 4: Certificados */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={FileSpreadsheet} color="fuchsia" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Certificados Digitales Validados</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Olvidate de los papeles dudosos. Cada consulta genera un certificado digital con firma electrónica verificable, enviado directamente a RRHH si es necesario.
                    </p>
                </div>
                {/* Visual decorativo de "Certificado" (Violeta) */}
                <div className="w-[200px] h-[150px] bg-purple-900/20 rounded-tl-2xl border-t border-l border-purple-500/20 p-6 relative translate-y-4 translate-x-4 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]">
                     <div className="flex justify-between mb-4">
                         <div className="h-8 w-8 rounded bg-purple-500/30 text-purple-200 flex items-center justify-center shadow-sm"><ShieldCheck size={16}/></div>
                         <div className="h-2 w-16 rounded bg-purple-200/10" />
                     </div>
                     <div className="space-y-2">
                         <div className="h-2 w-full rounded bg-purple-200/20" />
                         <div className="h-2 w-3/4 rounded bg-purple-200/20" />
                         <div className="h-2 w-full rounded bg-purple-200/10" />
                     </div>
                     <div className="absolute bottom-0 right-0 h-20 w-20 bg-fuchsia-500/10 blur-xl" />
                </div>
            </Card>

        </div>
      </section>

      {/* 3. PLANES (Cotización) */}
      <section className="py-24 px-6 relative">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">Planes a la medida de tu equipo</h2>
                  <p className="text-purple-200/60">Desde Startups hasta grandes corporaciones.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <CorporatePlan 
                    title="Pymes & Startups"
                    desc="Para equipos ágiles que necesitan cobertura rápida sin trámites."
                    features={["Hasta 50 empleados", "Telemedicina 24/7", "Recetas digitales", "Reporte mensual básico"]}
                  />
                  <CorporatePlan 
                    title="Corporate"
                    desc="Solución integral para empresas en crecimiento con necesidades de gestión."
                    features={["50 a 500 empleados", "Dashboard de RRHH", "Certificados de ausentismo", "Account Manager dedicado"]}
                    recommended={true}
                  />
                  <CorporatePlan 
                    title="Enterprise"
                    desc="Infraestructura personalizada para grandes organizaciones."
                    features={["+500 empleados", "API de integración", "Whitelabel (Tu marca)", "Soporte VIP 24/7"]}
                  />
              </div>
          </div>
      </section>

      {/* 4. FAQ EMPRESAS */}
      <section className="py-24 px-6 border-t border-purple-500/10 bg-[#090514]">
          <div className="mx-auto max-w-3xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes Empresas</h2>
               </div>
               <div className="space-y-4">
                   <FAQItem 
                     q="¿Cómo se implementa en la empresa?"
                     a="Es 100% digital. Te damos acceso al Dashboard de RRHH donde podés cargar la lista de empleados (Excel o manual). Ellos reciben un mail de bienvenida y ya pueden usar el servicio."
                   />
                   <FAQItem 
                     q="¿Qué información recibe la empresa sobre la salud de los empleados?"
                     a="Respetamos la privacidad médica. La empresa recibe reportes estadísticos de uso y ausentismo, y los certificados médicos de reposo, pero NO el diagnóstico clínico detallado ni el historial médico personal."
                   />
                   <FAQItem 
                     q="¿Puedo integrar esto con mi sistema de liquidación de sueldos?"
                     a="Sí, en el plan Enterprise ofrecemos API para conectar con sistemas como SAP, Workday o sistemas propietarios para automatizar la gestión de licencias."
                   />
               </div>
          </div>
      </section>
    
    </div>
  );
}