import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const fastSpring = { type: "spring", stiffness: 300, damping: 30 };

const ROLES = [
  { key: "paciente", label: "Paciente", desc: "Atención digital y seguimiento." },
  { key: "medico", label: "Médico", desc: "Sumate al cuerpo médico online." },
  { key: "corporacion", label: "Corporación", desc: "Solución para empresas." },
];

export default function AuthCard() {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("paciente");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const fields = useMemo(() => getFields(mode, role), [mode, role]);
  const [form, setForm] = useState(() => initForm(fields));

  useEffect(() => {
    setForm(initForm(fields));
    setErrors({});
  }, [mode, role, fields]);

  function onChange(name, value) {
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 800);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0118] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[10%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#8c00ff]/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Lado Izquierdo: Info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={fastSpring}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#bc8bff]">
              Portal Unificado
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Ingresá a <br />
              <span className="text-[#a855f7]">CelDoctor</span>.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-white/90">
              Gestioná tu salud, tu agenda profesional o la nómina de tu empresa desde una sola plataforma segura y eficiente.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <MiniStat k="24/7" v="Atención Médica" />
              <MiniStat k="Encriptado" v="Seguridad de Datos" />
            </div>
          </motion.div>

          {/* Lado Derecho: Formulario */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={fastSpring}
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-[#130b24] p-8 shadow-2xl backdrop-blur-md sm:p-12">
              
              <div className="relative mb-10 flex rounded-2xl bg-black/40 p-1 ring-1 ring-white/20">
                <Tab active={mode === "login"} onClick={() => setMode("login")}>Ingresar</Tab>
                <Tab active={mode === "register"} onClick={() => setMode("register")}>Registrarse</Tab>
              </div>

              <div className="mb-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Seleccioná tu Perfil</label>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {ROLES.map((r) => (
                    <RolePill
                      key={r.key}
                      active={role === r.key}
                      label={r.label}
                      desc={r.desc}
                      onClick={() => setRole(r.key)}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${mode}-${role}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid gap-6 sm:grid-cols-2"
                  >
                    {fields.map((f) => (
                      <div key={f.name} className={f.fullWidth ? "sm:col-span-2" : ""}>
                        <Field
                          label={f.label}
                          name={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.name] ?? ""}
                          error={errors[f.name]}
                          onChange={(v) => onChange(f.name, v)}
                        />
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#8c00ff] py-4 text-base font-bold text-white shadow-[0_20px_40px_-15px_rgba(140,0,255,0.7)] transition-all hover:scale-[1.02] hover:bg-[#9d26ff] active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "Procesando..." : mode === "login" ? "Iniciar Sesión" : "Crear Mi Cuenta"}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-[11px] leading-relaxed text-white/60">
                    Al continuar, aceptas nuestros <span className="text-white">Términos de Servicio</span> y <span className="text-white">Política de Privacidad</span>.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Tab({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex-1 rounded-xl py-3 text-sm font-bold transition-all ${
        active ? "bg-[#25124d] text-white shadow-xl ring-1 ring-white/30" : "text-white/50 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function RolePill({ active, label, desc, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col rounded-2xl border p-4 text-left transition-all ${
        active ? "border-[#a855f7] bg-[#a855f7]/20" : "border-white/10 bg-black/30 hover:border-white/30"
      }`}
    >
      <span className={`text-sm font-bold ${active ? "text-white" : "text-white/70 group-hover:text-white"}`}>{label}</span>
      <span className={`mt-1 text-[10px] leading-tight ${active ? "text-white/90" : "text-white/40"}`}>{desc}</span>
    </button>
  );
}

function Field({ label, name, type = "text", placeholder, value, error, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-white">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-black/40 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/20 ${
          error ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]"
        }`}
      />
      {error && <span className="ml-1 mt-1 text-[10px] font-bold text-red-400">{error}</span>}
    </div>
  );
}

function MiniStat({ k, v }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="text-2xl font-black tracking-tighter text-white">{k}</div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80">{v}</div>
    </div>
  );
}

function getFields(mode, role) {
  if (mode === "login") {
    const base = [
      { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true, fullWidth: true },
      { name: "password", label: "Contraseña", type: "password", placeholder: "••••••••", required: true, fullWidth: true },
    ];
    if (role === "corporacion") {
      base.unshift({ name: "companyId", label: "ID Empresa", placeholder: "CEL-XXXX", required: true, fullWidth: true });
    }
    return base;
  }
  return [
    { name: "fullName", label: "Razón Social / Nombre", placeholder: "Nombre oficial", required: true, fullWidth: true },
    { name: "email", label: "Email de contacto", type: "email", placeholder: "ejemplo@dominio.com", required: true, fullWidth: true },
    { name: "license", label: "Matrícula / CUIT", placeholder: "Identificación oficial", required: true },
    { name: "phone", label: "Teléfono", placeholder: "+54...", required: true },
    { name: "password", label: "Contraseña", type: "password", placeholder: "••••••••", required: true },
    { name: "confirmPassword", label: "Confirmar", type: "password", placeholder: "••••••••", required: true },
  ];
}

function initForm(fields) {
  const obj = {};
  fields.forEach(f => obj[f.name] = "");
  return obj;
}