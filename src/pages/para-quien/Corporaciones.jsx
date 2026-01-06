import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Activity,
  Layers,
  Network,
  ArrowRight,
  CheckCircle2,
  Plus,
  PieChart,
  Code2
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
      "border border-white/5 shadow-2xl",
      className
    )}
  >
    {children}
  </motion.div>
);

// 2. Icono Glassmorphism (Violeta)
const GlassIcon = ({ icon: Icon, color = "purple" }) => (
  <div className={cn(
      "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/10 backdrop-blur-md",
      color === "purple" ? "bg-purple-500/10 text-purple-300" :
      color === "indigo" ? "bg-indigo-500/10 text-indigo-400" :
      "bg-fuchsia-500/10 text-fuchsia-400"
  )}>
    <Icon size={28} />
  </div>
);

// 3. Botón Principal
const PrimaryButton = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
    "group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#06040F] transition-all hover:bg-purple-50 hover:scale-[1.02]", 
    className
  )}>
    {children}
    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
  </button>
);

// --- ILUSTRACIONES CSS (Adaptadas a Violeta) ---

// 1. Ilustración: Descompresión de Guardias
const TriageIllustration = () => (
  <div className="relative z-10 mx-auto mt-6 h-[220px] w-full max-w-[300px] flex items-end justify-between px-4">
      {/* Edificio Hospital */}
      <div className="relative w-[100px] h-[140px] bg-[#1a1535] rounded-t-xl border border-white/10 flex flex-col items-center justify-end p-2 opacity-50 group-hover:opacity-40 transition-opacity">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
               <div className="h-4 w-1 bg-red-500/50 rounded absolute" />
               <div className="w-4 h-1 bg-red-500/50 rounded absolute" />
           </div>
           {/* Ventanas */}
           <div className="grid grid-cols-2 gap-2 w-full mb-4">
               {[1,2,3,4].map(i => <div key={i} className="h-6 rounded bg-white/5" />)}
           </div>
           <div className="text-[10px] text-white/30 font-bold mb-2">GUARDIA FÍSICA</div>
      </div>

      {/* Flecha de flujo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20">
          <ArrowRight size={24} className="rotate-[-45deg]" />
      </div>

      {/* App CelDoctor (Violeta) */}
      <div className="relative w-[110px] h-[180px] bg-gradient-to-b from-purple-900/40 to-[#1a1535] rounded-[1.5rem] border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center p-2 transform translate-y-[-20px]">
           <div className="h-1 w-8 bg-white/10 rounded-full mb-4 mt-2" />
           <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 mb-3 animate-pulse">
               <Activity size={18} />
           </div>
           <div className="space-y-2 w-full px-2">
               <div className="h-2 w-full bg-white/10 rounded" />
               <div className="h-2 w-2/3 bg-white/10 rounded" />
           </div>
           <div className="mt-auto mb-2 bg-purple-500 px-3 py-1 rounded-full text-[9px] font-bold text-white">
               Atendido
           </div>
      </div>
  </div>
);

// 2. Ilustración: Marca Blanca (White Label)
const WhiteLabelCard = () => (
    <div className="relative mt-8 w-full max-w-[240px] mx-auto rounded-xl bg-[#1e2538] p-5 ring-1 ring-white/5 shadow-2xl overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
         
         {/* Placeholder de Logo cambiante */}
         <div className="flex items-center justify-between mb-6">
             <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors duration-500">
                 <div className="h-4 w-4 rounded-full border-2 border-current" />
             </div>
             <div className="h-2 w-16 rounded bg-white/10" />
         </div>

         {/* Interfaz Genérica */}
         <div className="space-y-3">
             <div className="h-24 w-full rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1 bg-white/10 group-hover:bg-purple-400 transition-colors duration-500" />
                 <div className="p-3 space-y-2">
                     <div className="h-2 w-12 rounded bg-white/20" />
                     <div className="h-2 w-20 rounded bg-white/10" />
                 </div>
             </div>
         </div>
         
         {/* Etiqueta */}
         <div className="mt-4 text-center">
             <span className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-purple-300 transition-colors">Tu Marca Aquí</span>
         </div>
    </div>
);

// 3. Ilustración: API Integration (Nodos Violetas)
const ApiNodes = () => (
    <div className="relative h-[160px] w-full flex items-center justify-center">
        {/* Nodo Central (CelDoctor) */}
        <div className="absolute z-20 h-16 w-16 rounded-2xl bg-[#2a2f45] border border-white/10 flex items-center justify-center shadow-2xl">
            <Code2 size={24} className="text-white" />
        </div>
        
        {/* Nodos Satélite */}
        <div className="absolute w-full max-w-[200px] h-[100px]">
            {/* Líneas conectoras */}
            <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute top-1/2 right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent via-fuchsia-500/50 to-transparent" />

            {/* Satélite 1 (CRM) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-[#1a1535] border border-purple-500/30 flex items-center justify-center text-[8px] text-purple-300 font-bold">
                CRM
            </div>
            {/* Satélite 2 (App) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-10 w-10 rounded-full bg-[#1a1535] border border-fuchsia-500/30 flex items-center justify-center text-[8px] text-fuchsia-300 font-bold">
                APP
            </div>
        </div>
        
        {/* Partículas viajando */}
        <div className="absolute h-2 w-2 rounded-full bg-white blur-[2px] animate-ping" style={{ animationDuration: '3s' }} />
    </div>
);

// --- COMPONENTE DE MODELOS (Solutions) ---
const PartnershipModel = ({ title, desc, features, highlight = false }) => (
    <Card className={cn("flex flex-col p-8 transition-transform duration-300 hover:scale-[1.01]", highlight ? "border-purple-500/30 ring-1 ring-purple-500/20" : "")}>
        <div className="mb-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-indigo-200/60 leading-relaxed">{desc}</p>
        </div>
        <div className="my-6 h-px w-full bg-white/10" />
        <ul className="mb-8 flex-1 space-y-4">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-indigo-200/80">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <CheckCircle2 size={12} />
                    </div>
                    {feat}
                </li>
            ))}
        </ul>
        <button className={cn(
            "w-full rounded-xl py-4 text-sm font-bold transition-all",
            highlight ? "bg-white text-[#06040F] hover:bg-purple-50" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
        )}>
            Más información
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


// === PÁGINA PARTNERS ===
export default function Partners() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300">
                    Para Financiadores de Salud
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    El complemento ideal <br className="hidden md:block"/>
                    para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Cartilla Médica.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-indigo-200/60 mb-10 leading-relaxed">
                    Ayudamos a Prepagas, Obras Sociales y Seguros a descomprimir sus guardias físicas y reducir costos operativos con telemedicina de marca blanca.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Hablar con un asesor</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition hover:text-purple-300">
                          Ver integración técnica
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID (Soluciones B2B) */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: Descompresión (Grande) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#0c1426]">
                <div className="flex-1 z-20 max-w-lg p-4">
                    <GlassIcon icon={Building} color="purple" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Menos Guardia, Más Eficiencia.</h2>
                    <p className="text-indigo-200/60 text-lg leading-relaxed">
                        Resolvemos el 80% de las consultas de baja complejidad (Código Verde) por videollamada. Liberá tus recursos físicos para lo que realmente importa.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto"><TriageIllustration /></div>
            </Card>

            {/* Bento 2: Marca Blanca */}
            <Card className="flex flex-col justify-between" delay={0.1}>
                <div>
                    <GlassIcon icon={Layers} color="indigo" />
                    <h3 className="text-xl font-bold text-white mb-2">Marca Blanca (White Label)</h3>
                    <p className="text-sm text-indigo-200/50 leading-relaxed">
                        Tu logo, tus colores. Nuestra tecnología. Integramos la videoconsulta en tu App o Web existente de forma transparente.
                    </p>
                </div>
                <WhiteLabelCard />
            </Card>

            {/* Bento 3: Integración API */}
            <Card className="flex flex-col justify-between" delay={0.2}>
                 <div>
                    <GlassIcon icon={Network} color="fuchsia" />
                    <h3 className="text-xl font-bold text-white mb-2">API First</h3>
                    <p className="text-sm text-indigo-200/50 leading-relaxed">
                        Conectá CelDoctor con tu CRM, sistema de turnos o validador de credenciales. Documentación clara y soporte técnico.
                    </p>
                 </div>
                 <ApiNodes />
            </Card>

            {/* Bento 4: Cobertura (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0" delay={0.3}>
                <div className="flex-1 py-4">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={PieChart} color="purple" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Reducción de Siniestralidad</h3>
                    </div>
                    <p className="text-indigo-200/60 max-w-lg">
                        El costo de una videoconsulta es significativamente menor al de una guardia presencial. Optimizá tu gasto prestacional manteniendo la calidad médica.
                    </p>
                </div>
                {/* Visual abstracto de red */}
                <div className="w-[250px] h-[180px] bg-white/5 rounded-tl-2xl border-t border-l border-white/10 p-6 relative translate-y-4 translate-x-4 overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-50" />
                     {/* Puntos conectados */}
                     <div className="grid grid-cols-4 gap-4 mt-4 opacity-50">
                         {[...Array(12)].map((_,i) => (
                             <div key={i} className="h-2 w-2 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                         ))}
                     </div>
                </div>
            </Card>

        </div>
      </section>

      {/* 3. MODELOS DE CONTRATACIÓN */}
      <section className="py-24 px-6 relative">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">Modelos Flexibles</h2>
                  <p className="text-indigo-200/50">Nos adaptamos a la estructura de tu cartera de afiliados.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <PartnershipModel 
                    title="Cápita (PMPM)"
                    desc="Modelo tradicional por afiliado. Acceso ilimitado para toda tu cartera con un costo fijo mensual predecible."
                    features={["Previsibilidad de costos", "Uso ilimitado", "Ideal carteras grandes", "Reportes de uso"]}
                  />
                  <PartnershipModel 
                    title="Pago por Uso"
                    desc="Abonás únicamente por las consultas realizadas. Ideal para seguros de vida, ART o carteras con baja tasa de uso."
                    features={["Sin costo fijo alto", "Pago por evento", "Ideal Seguros/ART", "Escalabilidad total"]}
                    highlight={true}
                  />
                  <PartnershipModel 
                    title="Modelo Híbrido"
                    desc="Un mix inteligente. Cápita base reducida + fee variable por excedente de consultas."
                    features={["Balance costo/riesgo", "Adaptable", "Cobertura base", "Optimización de presupuesto"]}
                  />
              </div>
          </div>
      </section>

      {/* 4. FAQ PARTNERS */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#080512]">
          <div className="mx-auto max-w-3xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes Integración</h2>
               </div>
               <div className="space-y-4">
                   <FAQItem 
                     q="¿Cómo validamos la identidad del afiliado?"
                     a="Podemos integrarnos con tu web service de padrón en tiempo real. Si el afiliado está activo (y no tiene carencias), el sistema le permite la atención. También soportamos validación por token."
                   />
                   <FAQItem 
                     q="¿Los médicos son de CelDoctor o de la Prepaga?"
                     a="Flexibilidad total. Podemos proveer nuestro staff médico 24/7, o podemos darte la plataforma tecnológica para que tus propios médicos atiendan las videollamadas (SaaS)."
                   />
                   <FAQItem 
                     q="¿Qué sucede con la Receta Digital?"
                     a="Nuestra plataforma emite recetas digitales que cumplen con la Ley de Receta Electrónica. Nos integramos con validadores farmacéuticos para que el socio pueda comprar en cualquier farmacia."
                   />
                   <FAQItem 
                     q="¿Tiempos de implementación?"
                     a="Para un modelo estándar (nuestra red médica + tu branding básico), podemos salir en vivo en 72 horas. Para integraciones profundas vía API, el promedio es de 2 a 4 semanas."
                   />
               </div>
          </div>
      </section>
    </div>
  );
}