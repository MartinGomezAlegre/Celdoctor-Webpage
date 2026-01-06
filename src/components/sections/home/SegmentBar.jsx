import Container from "../../layout/Container";
import Card from "../../ui/Card";

const items = [
  {
    title: "Empresas",
    desc: "Beneficio de salud para tu equipo. Reportes y cobertura.",
    href: "/empresas",
  },
  {
    title: "Familia",
    desc: "Atención inmediata, pediatría, clínica y seguimiento.",
    href: "/servicios",
  },
  {
    title: "Profesionales",
    desc: "Sumate a la red. Agenda, pacientes y herramientas.",
    href: "/acceso",
  },
];

export default function SegmentBar() {
  return (
    <Container>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} href={it.href}>
            <h3 className="text-base font-semibold text-white">{it.title}</h3>
            <p className="mt-1 text-sm text-white/70">{it.desc}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-cyan-300">
              Ver más →
            </span>
          </Card>
        ))}
      </div>
    </Container>
  );
}
