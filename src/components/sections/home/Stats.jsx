import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Animaciones optimizadas para una sensación premium (más suaves)
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } // Cubic-bezier para suavidad
      },
    }),
    []
  );

  return (
    // Usamos un fondo sólido oscuro que coincide con la imagen, más los elementos decorativos
    <section ref={ref} className="relative overflow-hidden bg-[#0a0118] text-white py-20 px-6">
      {/* Luces de fondo atmosféricas sutiles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[120px]" />
         <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Card izquierda (Imagen Principal) */}
          <motion.div className="lg:col-span-5 h-full" variants={item}>
            <div
              className="relative h-full min-h-[450px] overflow-hidden rounded-[32px] border border-white/10 bg-[#130b24]"
            >
              <img
                src="./images/imagendoctor.png" // Asegúrate que esta es la imagen del doctor con gafas
                alt="Doctor"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              {/* Overlays para oscurecer y dar estilo exacto a la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0118]/80 to-transparent" />

              <div className="relative flex h-full flex-col justify-start p-10 lg:p-12">
                <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                  La app médica <span className="text-[var(--accent)]">#1</span>
                  <br />
                  más descargada
                  <br />
                  de telemedicina.
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Cards derecha (Grid de estadísticas) */}
          <div className="lg:col-span-7">
            <div className="grid h-full gap-6 sm:grid-cols-2">
              
              {/* Card 1: Estrellas */}
              <motion.div variants={item}>
                <StatCard
                  value="4.6"
                  suffix="/5"
                  colorClass="text-yellow-400" // Color amarillo exacto
                  title="ESTRELLAS"
                  body={
                    <>
                      La valoración media refleja la{" "}
                      <u className="decoration-white/30 underline-offset-4">
                        calidad del servicio
                      </u>
                      , la excelencia médica y la experiencia de usuario.
                    </>
                  }
                  inView={inView}
                />
              </motion.div>

              {/* Card 2: Descargas */}
              <motion.div variants={item}>
                <StatCard
                  value="1.5"
                  prefix="+"
                  suffix="M"
                  colorClass="text-[var(--accent)]" // Color violeta
                  title="DESCARGAS"
                  body={
                    <>
                      Millones de personas ya{" "}
                      <u className="decoration-white/30 underline-offset-4">
                        confían en CelDoctor
                      </u>{" "}
                      para cuidar su salud desde cualquier lugar.
                    </>
                  }
                  inView={inView}
                />
              </motion.div>

              {/* Card 3: Consultas */}
              <motion.div variants={item}>
                <StatCard
                  value="5"
                  prefix="+"
                  suffix="M"
                  colorClass="text-[var(--accent)]"
                  title="CONSULTAS"
                  body={
                    <>
                      Resolvemos problemas reales cada día de forma{" "}
                      <u className="decoration-white/30 underline-offset-4">
                        rápida, segura y eficaz
                      </u>
                      .
                    </>
                  }
                  inView={inView}
                />
              </motion.div>

              {/* Card 4: Satisfacción */}
              <motion.div variants={item}>
                <StatCard
                  value="94"
                  suffix="%"
                  colorClass="text-[var(--accent)]"
                  title="SATISFACCIÓN"
                  body={
                    <>
                      Una experiencia médica{" "}
                      <span className="text-[var(--accent)] font-semibold">ágil</span>{" "}
                      y{" "}
                      <span className="text-[var(--accent)] font-semibold">cercana</span>{" "}
                      que realmente marca la diferencia en tu vida.
                    </>
                  }
                  inView={inView}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ value, prefix = "", suffix = "", colorClass, title, body, inView }) {
  return (
    <div
      className="flex h-full flex-col justify-center rounded-[32px] border border-white/10 bg-[#130b24] p-10 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className={cx("text-[56px] font-extrabold tracking-tight leading-none", colorClass)}>
        <CountUp active={inView} value={value} prefix={prefix} suffix={suffix} />
      </div>

      <div className="mt-4 text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
        {title}
      </div>

      <p className="mt-6 text-[15px] leading-relaxed text-white/60">
        {body}
      </p>
    </div>
  );
}

function CountUp({ active, value, prefix = "", suffix = "" }) {
  const target = Number(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1500; // Duración un poco más larga para elegancia
    const start = performance.now();

    function tick(t) {
      const p = Math.min(1, (t - start) / duration);
      // Easing function: easeOutQuart para un final muy suave
      const eased = 1 - Math.pow(1 - p, 4); 
      setN(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, target]);

  const formatted = formatCount(n, target);

  return (
    <span>
      {prefix}
      {formatted}
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function formatCount(n, target) {
  // Si el target es decimal (ej 4.6), forzamos 1 decimal y usamos coma
  const isDecimal = !Number.isInteger(target);
  return isDecimal 
    ? n.toFixed(1).replace(".", ",") 
    : Math.round(n).toString();
}

function cx(...c) {
  return c.filter(Boolean).join(" ");
}