import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  MapPin,
  Receipt,
  Percent,
  ArrowRight,
  Plus,
  Store,
  Search,
  CheckCircle2
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITIES ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS BASE (Reutilizados para consistencia) ---

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

// --- ILUSTRACIONES CSS (Específicas de Descuentos) ---

// 1. Ilustración: QR Scanner (Credencial)
const QrScannerIllustration = () => (
  <div className="relative z-10 mx-auto mt-6 w-[200px] h-[240px]">
      {/* Teléfono */}
      <div className="absolute inset-0 bg-[#1a1535] rounded-[2rem] border-[6px] border-[#2e2b50] overflow-hidden shadow-2xl">
          {/* Pantalla con QR */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120D26] to-[#2e2b50] flex flex-col items-center justify-center p-4">
              <div className="text-[10px] text-purple-200/50 mb-2 uppercase tracking-widest">Credencial Digital</div>
              <div className="w-32 h-32 bg-white p-2 rounded-lg relative overflow-hidden">
                  <div className="w-full h-full bg-[#06040F] opacity-10 pattern-grid-lg" />
                  <QrCode size={112} className="text-[#06040F]" />
                  
                  {/* Línea de Escaneo Animada */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-fuchsia-500 shadow-[0_0_15px_rgba(232,121,249,0.8)] animate-scan" />
              </div>
              <div className="mt-4 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                  <div className="text-[10px] text-fuchsia-400 font-bold">ACTIVO</div>
              </div>
          </div>
      </div>
      
      {/* Efecto Glow Detrás */}
      <div className="absolute -inset-4 bg-purple-600/20 blur-[50px] -z-10" />
      
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
  </div>
);

// 2. Ilustración: Ticket de Ahorro
const SavingsTicket = () => (
    <div className="relative mt-8 w-full max-w-[240px] mx-auto perspective-[1000px] group">
        <div className="relative bg-white rounded-xl p-4 shadow-2xl transform transition-transform duration-500 group-hover:rotate-x-12">
            {/* Perforaciones */}
            <div className="absolute -left-2 top-1/2 w-4 h-4 bg-[#1F1746] rounded-full" />
            <div className="absolute -right-2 top-1/2 w-4 h-4 bg-[#1F1746] rounded-full" />
            
            {/* Contenido Ticket */}
            <div className="text-center border-b-2 border-dashed border-gray-200 pb-4 mb-4">
                <div className="h-8 w-8 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-white mb-2">
                    <Percent size={14} />
                </div>
                <div className="h-2 w-20 bg-gray-200 rounded mx-auto" />
            </div>
            
            <div className="space-y-3">
                <div className="flex justify-between items-center opacity-50">
                    <div className="h-2 w-12 bg-gray-300 rounded" />
                    <div className="h-2 w-8 bg-gray-300 rounded" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-400 font-bold">Total Lista</div>
                    <div className="text-xs text-gray-400 font-bold line-through decoration-red-400 decoration-2">$ 12.500</div>
                </div>
                <div className="flex justify-between items-center bg-fuchsia-50 p-2 rounded border border-fuchsia-100">
                    <div className="text-xs text-fuchsia-600 font-bold">A Pagar</div>
                    <div className="text-sm text-fuchsia-700 font-extrabold">$ 7.500</div>
                </div>
            </div>
            
            {/* Sello de Ahorro */}
            <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg transform rotate-[-10deg]">
                AHORRASTE 40%
            </div>
        </div>
    </div>
);

// 3. Ilustración: Mapa de Cobertura (Radar)
const MapNetwork = () => (
    <div className="relative h-[180px] w-full flex items-center justify-center overflow-hidden">
        {/* Radar Circles */}
        <div className="absolute w-[300px] h-[300px] border border-purple-500/10 rounded-full" />
        <div className="absolute w-[200px] h-[200px] border border-purple-500/20 rounded-full" />
        <div className="absolute w-[100px] h-[100px] border border-purple-500/30 rounded-full bg-purple-500/5" />
        
        {/* Central Point (User) */}
        <div className="relative z-10 h-4 w-4 bg-white rounded-full shadow-[0_0_15px_white] animate-pulse" />
        
        {/* Floating Pins (Pharmacies) */}
        {[1, 2, 3, 4, 5].map((i) => (
            <div 
                key={i}
                className="absolute flex flex-col items-center"
                style={{
                    top: `${50 + Math.sin(i * 1.5) * 35}%`,
                    left: `${50 + Math.cos(i * 1.5) * 35}%`,
                }}
            >
                <MapPin size={16} className="text-fuchsia-400 fill-fuchsia-400/20" />
                <div className="w-1 h-1 bg-fuchsia-400 rounded-full mt-1 opacity-50" />
            </div>
        ))}
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

// === PÁGINA DESCUENTOS ===
export default function Descuentos() {
  return (
    <div className="min-h-screen bg-[#06040F] font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] opacity-60" />
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    Ahorro Inteligente
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Tu salud cuesta <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">hasta un 40% menos.</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-purple-200/70 mb-10 leading-relaxed">
                    Accedé a descuentos en farmacias de todo el país presentando tu credencial digital. Sin trámites, sin reintegros, directo en el mostrador.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <PrimaryButton>Ver Farmacias</PrimaryButton>
                      <button className="rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20">
                          Consultar Vademécum
                      </button>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 2. BENTO GRID */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bento 1: QR (Main Feature) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 relative group bg-gradient-to-br from-[#120D26] to-[#1a103d] border-purple-500/10">
                <div className="flex-1 z-20 max-w-lg p-4 pl-8">
                    <GlassIcon icon={QrCode} color="fuchsia" />
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Tu Credencial es un QR.</h2>
                    <p className="text-purple-200/70 text-lg leading-relaxed">
                        Olvidate de imprimir papeles o tarjetas plásticas. Abrís la App, mostrás tu código QR dinámico y el descuento se aplica al instante.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto pr-0 md:pr-12 pb-8 md:pb-0"><QrScannerIllustration /></div>
            </Card>

            {/* Bento 2: Ahorro */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.1}>
                <div>
                    <GlassIcon icon={Receipt} color="purple" />
                    <h3 className="text-xl font-bold text-white mb-2">Descuento en el Acto</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        No es reintegro. Pagás menos en el momento de la compra. Transparente y rápido.
                    </p>
                </div>
                <SavingsTicket />
            </Card>

            {/* Bento 3: Cobertura */}
            <Card className="flex flex-col justify-between border-purple-500/10" delay={0.2}>
                 <div>
                    <GlassIcon icon={Store} color="indigo" />
                    <h3 className="text-xl font-bold text-white mb-2">Cobertura Nacional</h3>
                    <p className="text-sm text-purple-200/60 leading-relaxed">
                        Desde grandes cadenas hasta farmacias de barrio. Nuestra red cubre todas las provincias.
                    </p>
                 </div>
                 <MapNetwork />
            </Card>

            {/* Bento 4: Vademécum (Ancho) */}
            <Card className="md:col-span-2 flex flex-col md:flex-row items-center gap-10 overflow-hidden pr-0 pb-0 border-purple-500/10" delay={0.3}>
                <div className="flex-1 py-4 px-8">
                    <div className="flex items-center gap-3 mb-4">
                         <GlassIcon icon={Search} color="purple" />
                         <h3 className="text-2xl font-bold text-white mt-[-24px]">Vademécum Amplio</h3>
                    </div>
                    <p className="text-purple-200/70 max-w-lg">
                        Cubrimos una amplia gama de medicamentos recetados, anticonceptivos y tratamientos crónicos. También accedés a precios preferenciales en venta libre.
                    </p>
                </div>
                
                {/* Visual Vademécum */}
                <div className="w-[280px] h-[180px] bg-purple-900/10 rounded-tl-2xl border-t border-l border-purple-500/20 p-6 relative translate-y-4 translate-x-4 shadow-inner">
                     <div className="space-y-3">
                         {["Ibuprofeno 600mg", "Amoxicilina 500mg", "Anticonceptivos", "Loratadina"].map((item, i) => (
                             <div key={i} className="flex items-center justify-between border-b border-purple-500/10 pb-2">
                                 <span className="text-sm text-purple-200/80">{item}</span>
                                 <span className="text-xs font-bold text-fuchsia-400 bg-fuchsia-500/10 px-2 py-0.5 rounded">-40%</span>
                             </div>
                         ))}
                     </div>
                </div>
            </Card>

        </div>
      </section>

      {/* 3. CÓMO USAR (STEPS) */}
      <section className="py-20 px-6 border-t border-purple-500/10 bg-[#080512]">
          <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">¿Cómo obtengo el descuento?</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
                  <StepCard 
                    number="1"
                    title="Buscá tu farmacia"
                    desc="Usá nuestro buscador en la app para encontrar la farmacia adherida más cercana a tu ubicación."
                  />
                  <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>
                  
                  <StepCard 
                    number="2"
                    title="Avisá en caja"
                    desc="Antes de que te cobren, indicá que tenés cobertura digital de CelDoctor."
                  />
                   <div className="hidden md:block mt-8 text-purple-500/30"><ArrowRight size={24} /></div>

                  <StepCard 
                    number="3"
                    title="Escaneá y Ahorrá"
                    desc="Mostrá el QR de tu credencial desde la App. El sistema aplica el descuento automáticamente."
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
                     q="¿Necesito llevar la receta impresa?"
                     a="No es obligatorio para el descuento, pero la farmacia necesita la receta (digital o papel) para venderte medicamentos bajo prescripción. Nuestra Receta Digital es ideal para esto."
                   />
                   <FAQItem 
                     q="¿Hay límite de compra?"
                     a="Los límites dependen de tu plan específico (Personal o Familiar), pero generalmente cubren el tratamiento mensual estándar para patologías agudas y crónicas."
                   />
                   <FAQItem 
                     q="¿Qué pasa si la farmacia no lee el QR?"
                     a="No te preocupes. Debajo del QR en tu credencial figura un código numérico y de barras. El farmacéutico puede ingresar ese número manualmente para validar tu descuento."
                   />
                   <FAQItem 
                     q="¿Cubre perfumería y accesorios?"
                     a="El descuento fuerte (40%) es en medicamentos. Para perfumería y accesorios, solemos tener acuerdos estacionales o descuentos menores según la cadena de farmacias."
                   />
               </div>
          </div>
      </section>
    </div>
  );
}