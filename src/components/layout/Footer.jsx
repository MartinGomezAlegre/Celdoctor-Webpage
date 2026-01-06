import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  Send 
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-20 pb-10 text-white">
      <motion.div 
        className="mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Columna 1: Info y Redes */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h2 className="text-2xl font-black tracking-tighter">CELDOCTOR</h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
              Revolucionamos la salud digital conectando pacientes, médicos y empresas en un ecosistema seguro, ágil y humano.
            </p>
            <div className="mt-8 flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </motion.div>

          {/* Columna 2: Compañía */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Compañía</h3>
            <ul className="mt-6 space-y-4">
              <FooterLink to="/">Inicio</FooterLink>
              <FooterLink to="/servicios">Servicios</FooterLink>
              <FooterLink to="/empresas">Para Empresas</FooterLink>
              <FooterLink to="/cuerpo-medico">Cuerpo Médico</FooterLink>
              <FooterLink to="/acceso">Acceso Clientes</FooterLink>
            </ul>
          </motion.div>

          {/* Columna 3: Soporte */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Soporte</h3>
            <ul className="mt-6 space-y-4">
              <FooterLink to="/ayuda">Centro de Ayuda</FooterLink>
              <FooterLink to="/terminos">Términos y Condiciones</FooterLink>
              <FooterLink to="/privacidad">Política de Privacidad</FooterLink>
              <FooterLink to="/cookies">Cookies</FooterLink>
              <FooterLink to="/contacto">Contacto</FooterLink>
            </ul>
          </motion.div>

          {/* Columna 4: Newsletter y Contacto */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Novedades</h3>
            <p className="mt-6 text-sm text-zinc-400">
              Suscríbete para recibir noticias de salud y actualizaciones de la plataforma.
            </p>
            
            <form className="mt-6 flex max-w-sm items-center gap-2 rounded-xl bg-white/5 p-1 ring-1 ring-white/10 focus-within:ring-[#8c00ff]/50 transition-all">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-zinc-600"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8c00ff] text-white transition-transform hover:scale-105 active:scale-95">
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail size={16} className="text-[#8c00ff]" />
                contacto@celdoctor.com
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Phone size={16} className="text-[#8c00ff]" />
                +54 9 11 0000 0000
              </div>
            </div>
          </motion.div>
        </div>

        {/* Barra Inferior */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 border-t border-white/5 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-xs text-zinc-500">
                © 2024 CelDoctor S.A. Todos los derechos reservados.
              </p>
              {/* Regulado por Superintendencia */}
              <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                Entidad regulada por la Superintendencia de Servicios de Salud
              </p>
            </div>

            {/* Medios de Pago */}
            <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              <img src="/images/visa.svg" alt="Visa" className="h-4" />
              <img src="../public/images/LogoMastercard.png" alt="Mastercard" className="h-6" />
              <img src="/images/amex.svg" alt="Amex" className="h-5" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-sm text-zinc-400 transition-colors hover:text-[#8c00ff]"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 ring-1 ring-white/10 transition-all hover:bg-[#8c00ff] hover:text-white hover:ring-[#8c00ff]">
      {icon}
    </button>
  );
}

