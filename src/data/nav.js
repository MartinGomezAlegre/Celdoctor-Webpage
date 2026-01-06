// src/data/nav.js

export const navLinks = [
  { label: "Unite a nuestro cuerpo Medico", to: "/acceso" },
];

export const serviciosItems = [
  {
    title: "Ver todas las especialidades",
    desc: "Explora nuestro cuadro médico completo y equipo propio.",
    to: "/servicios/especialidades",
  },
  {
    title: "Chat médico inmediato",
    desc: "Mensajería asincrónica con 12 especialidades 24/7.",
    to: "/servicios/chat-medico",
  },
  {
    title: "Videollamada agendada",
    desc: "Servicio de teleconsulta por video con más de 22 especialidades.",
    to: "/servicios/videollamada-agendada",
  },
  {
    title: "Cuadro médico completo",
    desc: "Médicos, psicólogos, enfermeros y entrenadores.",
    to: "/servicios/cuadro-medico",
  },
  {
    title: "Llamadas de urgencias",
    desc: "Asistencia médica telefónica inmediata para urgencias.",
    to: "/servicios/urgencias",
  },
  {
    title: "Videollamada inmediata",
    desc: "Servicio de urgencias por video 24/7 de medicina general.",
    to: "/servicios/videollamada-inmediata",
  },
  {
    title: "Descuentos en farmacias",
    desc: "Ahorra hasta un 40% en medicamentos en nuestra red de farmacias adheridas.",
    to: "/servicios/farmacias",
  },
  {
    title: "Receta digital",
    desc: "Recibí tus recetas electrónicas al instante, válidas en farmacias de todo el país.",
    to: "/servicios/receta-digital",
  },
];

export const paraQuienItems = [
  {
    title: "Personal y Familiar",
    desc: "Planes de salud individuales y para grupos familiares con cobertura total.",
    to: "/para-quien/personal",
  },
  {
    title: "Empresas y PyMEs",
    desc: "Reduce el ausentismo y cuida la salud de tus colaboradores.",
    to: "/para-quien/empresas",
  },
  {
    title: "Corporaciones y Seguros",
    desc: "Soluciones de marca blanca e integraciones API para grandes nóminas.",
    to: "/para-quien/corporaciones",
  },
];

// Export default “de respaldo” por si algún import futuro se rompe
export default { navLinks, serviciosItems, paraQuienItems };
