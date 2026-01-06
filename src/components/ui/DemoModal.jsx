import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ChevronRight, ChevronLeft, CheckCircle2, 
  MessageCircle, Video, FileText, Activity, ShieldCheck, MapPin, Search
} from "lucide-react";

// --- DATOS DE LA DEMO ---
const steps = [
  {
    key: "inicio",
    title: "Central de Bienestar",
    subtitle: "Tu acceso directo a la salud.",
    description: "Tus empleados ven esto al entrar: opciones claras, sin fricción. Pueden elegir atención inmediata o agendar.",
    benefit: "Menos ansiedad = Más productividad.",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    key: "chat",
    title: "Triaje Inteligente",
    subtitle: "Atención inmediata por chat.",
    description: "El usuario describe el síntoma y un médico responde en tiempo real. Ideal para consultas rápidas que no requieren video.",
    benefit: "Resuelve el 80% de las consultas simples.",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    key: "video",
    title: "Videoconsulta",
    subtitle: "Cara a cara con el especialista.",
    description: "Para diagnósticos más profundos. Pediatría, Clínica y Salud Mental con calidad HD y excelente audio.",
    benefit: "Atención humana y empática a distancia.",
    icon: <Video className="w-5 h-5" />,
  },
  {
    key: "receta",
    title: "Receta Digital",
    subtitle: "Del celular a la farmacia.",
    description: "Al terminar la consulta, la receta aparece aquí. Válida en todo el país, con código de barras y firma legal.",
    benefit: "Cierre del ciclo médico sin papeles.",
    icon: <FileText className="w-5 h-5" />,
  },
];

// --- COMPONENTE INTERNO DEL TELÉFONO (AHORA INTERACTIVO) ---
function PhoneScreenContent({ stepKey, onNavigate }) {
  return (
    <div className="h-full w-full bg-[#0a0514] text-white flex flex-col font-sans select-none">
      {/* Header Falso del Celular */}
      <div className="pt-8 px-5 pb-3 flex justify-between items-center bg-gradient-to-b from-violet-900/30 to-transparent z-10">
        <div>
          <h3 className="text-base font-bold">Hola, Lucas 👋</h3>
          <p className="text-[10px] text-white/50 uppercase tracking-wider">Plan Corporativo</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
          <ShieldCheck className="w-4 h-4 text-violet-300" />
        </div>
      </div>

      {/* Contenido Cambiante */}
      <div className="flex-1 overflow-y-auto relative px-4 pb-4 scrollbar-hide">
        <AnimatePresence mode="wait">
          
          {/* --- PANTALLA INICIO --- */}
          {stepKey === "inicio" && (
            <motion.div 
              key="inicio"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 shadow-lg shadow-violet-900/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-3 opacity-20">
                   <Activity size={80} />
                 </div>
                 <p className="text-xs text-white/80 mb-1 relative z-10">Atención Inmediata</p>
                 <h4 className="text-lg font-bold leading-tight mb-3 relative z-10">¿Qué necesitás consultar hoy?</h4>
                 
                 {/* BOTÓN INTERACTIVO: LLEVA A CHAT */}
                 <button 
                    onClick={() => onNavigate("chat")}
                    className="w-full bg-white text-violet-900 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-100 transition active:scale-95 flex items-center justify-center gap-2 relative z-10"
                 >
                   <MessageCircle size={16} /> Iniciar Chat Médico
                 </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* BOTÓN INTERACTIVO: LLEVA A VIDEO */}
                <button 
                  onClick={() => onNavigate("video")}
                  className="bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all text-left group"
                >
                  <div className="h-8 w-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300 mb-2 group-hover:scale-110 transition-transform">
                     <Video className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-medium text-white">Videollamada</p>
                  <p className="text-[10px] text-white/50">Turnos programados</p>
                </button>

                {/* BOTÓN INTERACTIVO: LLEVA A RECETA */}
                <button 
                  onClick={() => onNavigate("receta")}
                  className="bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all text-left group"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-2 group-hover:scale-110 transition-transform">
                     <FileText className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-medium text-white">Recetas</p>
                  <p className="text-[10px] text-white/50">Historial y vigentes</p>
                </button>
              </div>
              
              <div className="pt-2">
                 <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Especialidades</p>
                 <div className="space-y-2">
                    {['Clínica Médica', 'Pediatría', 'Nutrición', 'Psicología'].map(esp => (
                        <div key={esp} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-xs text-white/80">{esp}</span>
                            <ChevronRight className="w-3 h-3 text-white/40" />
                        </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          )}

          {/* --- PANTALLA CHAT --- */}
          {stepKey === "chat" && (
            <motion.div 
              key="chat"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-3 pt-2 h-full flex flex-col"
            >
              <div className="flex-1 space-y-4">
                 <div className="text-center text-[10px] text-white/30 my-2">Hoy, 10:23 AM</div>
                 
                 <div className="flex justify-end">
                   <div className="bg-violet-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[85%] shadow-md">
                     Hola, estoy con dolor de cabeza fuerte y algo de fiebre.
                   </div>
                 </div>
                 
                 <div className="flex justify-start items-end gap-2">
                   <div className="h-6 w-6 rounded-full bg-blue-500 overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Dr" />
                   </div>
                   <div className="bg-[#1e1e24] text-gray-200 p-3 rounded-2xl rounded-tl-sm text-xs max-w-[80%] border border-white/10 shadow-md">
                     Hola Lucas. Soy el Dr. Paez. ¿Tomaste alguna medicación en las últimas 4 horas?
                   </div>
                 </div>

                 <div className="flex justify-end">
                   <div className="bg-violet-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[85%] shadow-md">
                     No, todavía nada.
                   </div>
                 </div>
                 
                 <div className="flex justify-center py-2">
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                     className="bg-black/40 text-white/40 px-3 py-1 rounded-full text-[10px] flex items-center gap-1"
                   >
                     <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }}/>
                     <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}/>
                     <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}/>
                   </motion.div>
                 </div>
              </div>
              
              {/* Input falso */}
              <div className="mt-auto p-2 bg-white/5 rounded-full flex items-center gap-2 border border-white/10">
                 <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                    <span className="text-xs">+</span>
                 </div>
                 <div className="h-2 w-24 bg-white/10 rounded-full" />
              </div>
              
              <button onClick={() => onNavigate('inicio')} className="mx-auto text-[10px] text-white/40 mt-2 underline">
                 Volver al inicio
              </button>
            </motion.div>
          )}

          {/* --- PANTALLA VIDEO --- */}
          {stepKey === "video" && (
            <motion.div 
              key="video"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="relative rounded-2xl overflow-hidden flex-1 bg-gray-800 border border-white/10 shadow-2xl mb-4">
                {/* Simulación de video */}
                <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Doctor"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                
                {/* Overlay Doctor Info */}
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-sm font-bold text-white">Dra. Claudia Vega</p>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/> Conectado
                  </div>
                </div>

                {/* PIP (Self view) */}
                <div className="absolute top-4 right-4 w-20 h-28 bg-black/50 rounded-lg border border-white/20 z-20 overflow-hidden">
                    <div className="w-full h-full bg-gray-600 animate-pulse" />
                </div>
              </div>

              {/* Controles de llamada */}
              <div className="flex justify-center gap-6 pb-6">
                <button className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-md">
                   <Video size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('inicio')}
                  className="h-14 w-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-900/50 hover:bg-red-600 transition-transform hover:scale-105"
                >
                   <X size={24} />
                </button>
                <button className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-md">
                   <MessageCircle size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* --- PANTALLA RECETA --- */}
          {stepKey === "receta" && (
            <motion.div 
              key="receta"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="space-y-4 pt-2"
            >
              <div className="bg-white text-black p-5 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-violet-600" />
                
                <div className="flex justify-between items-center mb-6 mt-1">
                   <img src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" className="w-8 h-8 opacity-50" alt="Rx" />
                   <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">ORDEN #9921</span>
                </div>

                <h4 className="font-bold text-xl text-gray-800">Ibuprofeno 600mg</h4>
                <p className="text-sm text-gray-500 mt-1">1 comprimido cada 8hs si hay dolor.</p>
                
                <div className="mt-8 pt-4 border-t border-dashed border-gray-300 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Fecha</p>
                    <p className="text-xs font-bold text-gray-700">05 ENE 2026</p>
                  </div>
                  <div className="h-12 w-12 bg-gray-900 rounded flex items-center justify-center">
                     <span className="text-[8px] text-white font-mono text-center leading-none">QR<br/>CODE</span>
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-violet-600/20 text-violet-300 border border-violet-600/50 py-3 rounded-xl font-semibold text-xs transition hover:bg-violet-600/30">
                <MapPin size={14} /> Farmacias con descuento
              </button>
              
              <button 
                onClick={() => onNavigate('inicio')}
                className="w-full text-center text-[11px] text-white/30 hover:text-white"
              >
                 &larr; Volver
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL (MODAL) ---
export default function CelDoctorDemo({ open, onClose }) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  // Mapeo inverso para que el teléfono pueda decir "ir a chat" y sepamos que es el index 1
  const navigateToStep = (key) => {
    const idx = steps.findIndex(s => s.key === key);
    if (idx !== -1) setCurrentStepIdx(idx);
  };

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentStepIdx(prev => Math.min(prev + 1, steps.length - 1));
      if (e.key === "ArrowLeft") setCurrentStepIdx(prev => Math.max(prev - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    return () => {
        window.removeEventListener("keydown", handleKey);
        document.body.style.overflow = '';
    }
  }, [open, onClose]);

  if (!open) return null;

  const activeData = steps[currentStepIdx];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      
      {/* 1. Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#020105]/90 backdrop-blur-sm"
      />

      {/* 2. Modal Container */}
      <motion.div 
        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full md:max-w-6xl bg-[#0d041c] md:rounded-3xl rounded-t-3xl overflow-hidden border-t md:border border-white/10 shadow-2xl flex flex-col md:flex-row h-[92vh] md:h-[700px]"
      >
        
        {/* --- COLUMNA IZQUIERDA: TEXTO DE VENTA --- */}
        <div className="w-full md:w-[45%] p-6 md:p-12 flex flex-col relative z-10 order-1 md:order-1 bg-[#0d041c]">
          
          {/* Header móvil (cerrar) */}
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <div className="flex items-center gap-2">
               <span className="bg-violet-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">DEMO</span>
               <span className="text-xs text-white/50 hidden md:inline">Modo Interactivo</span>
            </div>
            <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition">
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Contenido Texto */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/20 text-violet-300 mb-6">
                  {activeData.icon}
                  <span className="text-xs font-bold uppercase tracking-wide">{activeData.title}</span>
                </div>
                
                <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
                  {activeData.title}
                </h2>
                
                <div className="h-1 w-12 bg-violet-500 rounded-full mb-4 md:mb-6" />

                <p className="text-sm md:text-lg text-white/70 leading-relaxed mb-4 md:mb-6 max-w-md">
                  {activeData.description}
                </p>

                <div className="bg-violet-500/10 border-l-2 border-violet-500 p-3 md:p-4 rounded-r-xl">
                   <p className="text-xs font-bold text-violet-400 mb-1">BENEFICIO CLAVE</p>
                   <p className="text-xs md:text-sm text-violet-100 italic">"{activeData.benefit}"</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de navegación (Escritorio) - Oculto en móvil para dar espacio al teléfono */}
          <div className="hidden md:flex items-center gap-4 mt-8">
            <button 
              onClick={() => setCurrentStepIdx(prev => Math.max(prev - 1, 0))} 
              disabled={currentStepIdx === 0}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-white/5 disabled:opacity-30 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {steps.map((_, idx) => (
                <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentStepIdx ? "w-8 bg-violet-500" : "w-2 bg-white/20"}`} />
              ))}
            </div>
            <button 
              onClick={() => setCurrentStepIdx(prev => Math.min(prev + 1, steps.length - 1))} 
              className="p-3 rounded-full bg-white text-violet-950 hover:bg-violet-50 transition"
            >
              {currentStepIdx === steps.length - 1 ? <CheckCircle2 className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: EL TELÉFONO --- */}
        <div className="w-full md:w-[55%] bg-gradient-to-b from-[#150a2e] to-[#0a0314] md:rounded-l-[3rem] relative flex items-center justify-center p-4 md:p-0 order-2 md:order-2 overflow-hidden border-t md:border-t-0 border-white/10">
           
           {/* Decoración Fondo */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/30 rounded-full blur-[80px] pointer-events-none" />

           {/* CONTENEDOR DEL TELÉFONO RESPONSIVE */}
           <motion.div 
             className="relative z-20 shadow-2xl transition-all duration-500 ease-out 
                        w-full h-full md:w-[320px] md:h-[640px] 
                        rounded-t-3xl md:rounded-[45px] 
                        border-x-[1px] border-t-[1px] md:border-[8px] border-white/10 md:border-[#1a1a1a] 
                        bg-[#0a0514] overflow-hidden"
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
           >
             {/* Notch (Solo visible en Desktop para realismo) */}
             <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1a1a1a] rounded-b-xl z-50 items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-gray-800" />
             </div>
             
             {/* PANTALLA REAL INTERACTIVA */}
             <PhoneScreenContent 
                stepKey={activeData.key} 
                onNavigate={navigateToStep} // Pasamos la función de navegación
             />
             
             {/* Barra Home */}
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />
           </motion.div>

           {/* Indicador de "Probame" flotante */}
           <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
               <div className="relative">
                 <div className="absolute right-full mr-4 bg-white/10 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap backdrop-blur-md border border-white/10">
                    ¡Hacé click en el celular!
                 </div>
                 <div className="w-3 h-3 bg-white rounded-full animate-ping absolute right-0 top-0"></div>
               </div>
           </div>
        </div>

      </motion.div>
    </div>
  );
}