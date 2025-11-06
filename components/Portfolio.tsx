'use client';
import { useMemo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Folder, MapPin, Download, Code2, Cpu, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

// ====== PERSONALIZA ESTOS DATOS ======
const PROFILE = {
  nombre: "Jaime Gómez Marín",
  rol: "Ingeniero/a de Software",
  resumen:
    "Estudiante de último curso de Ingeniería Informática del Software, con formación sólida en desarrollo y en gestión de proyectos. Con interés por nuevas tecnologías y metodologías ágiles, busco prácticas donde aplicar mis conocimientos, ganar experiencia y aportar valor a proyectos tecnológicos innovadores.",
  ubicacion: "Sevilla, España",
  email: "jaime.gmarin03@gmail.com",
  github: "https://github.com/jaimegoomez",
  linkedin: "https://www.linkedin.com/in/jaime-gomez-marin",
  cv_url: "source\ CV.pdf", // añade el enlace a tu PDF
};

const SKILLS = [
  { name: "TypeScript", level: "Avanzado" },
  { name: "React / Next.js", level: "Avanzado" },
  { name: "Node.js / Express", level: "Avanzado" },
  { name: "Python", level: "Intermedio" },
  { name: "Django / FastAPI", level: "Intermedio" },
  { name: "PostgreSQL / Prisma", level: "Intermedio" },
  { name: "Docker / CI/CD", level: "Intermedio" },
  { name: "AWS / Vercel", level: "Intermedio" },
];

const PROJECTS = [
  {
    title: "ScreenRPA Multimodal",
    blurb:
      "Extensión de RPA con analítica de bienestar: Fitbit + reconocimiento emocional (DeepFace) integrado en Django + PostgreSQL para minería de procesos.",
    tags: ["Django", "PostgreSQL", "Python", "RPA", "Computer Vision"],
    links: { github: "#", demo: "#" },
    impact:
      "↓35% tiempo de proceso, paneles en tiempo real y pipeline reproducible con Docker.",
  },
  {
    title: "Osasuna Performance Tools",
    blurb:
      "Suite de utilidades para staff técnico (test psicológicos, hojas de seguimiento, dashboards).",
    tags: ["React", "Next.js", "Shadcn", "Chart.js"],
    links: { github: "#", demo: "#" },
    impact: "↑20% cumplimiento de rutinas y reporting semanal automatizado.",
  },
  {
    title: "ClinicOps Scheduler",
    blurb:
      "Planificador de turnos con restricciones duras y blandas para unidades hospitalarias.",
    tags: ["TypeScript", "Node", "Optimizacion", "PostgreSQL"],
    links: { github: "#", demo: "#" },
    impact: "Cobertura 100% y ↓15% horas extra en simulación.",
  },
];

const EXPERIENCE = [
  {
    empresa: "Club Atlético Osasuna — Área de Psicología",
    rol: "Data & Tools (colab.)",
    periodo: "2024 – 2025",
    detalles: [
      "Automatización de reportes y cuadros de mando para equipos femenino y cantera.",
      "Integraciones con wearables y formularios de seguimiento.",
    ],
  },
  {
    empresa: "Clínica (proyecto UCI)",
    rol: "Desarrollo de herramientas y formularios",
    periodo: "2025",
    detalles: [
      "Encuestas y pipelines de análisis para liderazgo, comunicación y cohesión.",
      "Plantillas exportables para formación y auditoría.",
    ],
  },
];

const EDUCATION = [
  {
    centro: "Universidad — Doble Grado Derecho y Economía",
    periodo: "2021 – 2026",
    detalles: ["Menciones en Econometría, Micro/Macro y Derecho Mercantil."],
  },
];

// ====== COMPONENTE PRINCIPAL ======
export default function Portfolio() {
  const tags = useMemo(
    () => Array.from(new Set(PROJECTS.flatMap((p) => p.tags))),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-slate-100"><Code2 size={20} /></div>
            <div>
              <h1 className="font-bold leading-tight">{PROFILE.nombre}</h1>
              <p className="text-sm text-slate-500">{PROFILE.rol}</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost"><a href="#proyectos">Proyectos</a></Button>
            <Button asChild variant="ghost"><a href="#experiencia">Experiencia</a></Button>
            <Button asChild variant="ghost"><a href="#sobre-mi">Sobre mí</a></Button>
            <Button asChild className="gap-2" variant="default">
              <a href={PROFILE.cv_url} target="_blank" rel="noreferrer"><Download size={16}/> Descargar CV</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section className="py-14">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Formándome para crear software útil, medible y con buen rendimiento.
              </motion.h2>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">{PROFILE.resumen}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="gap-2"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></Button>
                <Button asChild variant="secondary" className="gap-2"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></Button>
                <Button asChild variant="outline" className="gap-2"><a href={`mailto:${PROFILE.email}`}><Mail size={16}/> Contacto</a></Button>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16}/> {PROFILE.ubicacion}</div>
            </div>
            <Card className="md:col-span-1 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3"><Cpu size={18}/><h3 className="font-semibold">Stack principal</h3></div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {SKILLS.slice(0,6).map((s)=> (
                    <Badge key={s.name} variant="secondary">{s.name}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2"><Rocket size={18}/><h3 className="font-semibold">Qué aporto</h3></div>
                <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                  <li>Diseño orientado a métricas (KPIs, performance, DX).</li>
                  <li>Buenas prácticas: testing, CI, docs y trazabilidad.</li>
                  <li>Entrega continua y foco en negocio/usuario.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Proyectos destacados</h3>
            <div className="hidden md:flex items-center gap-2">
              {tags.map((t)=> <Badge key={t} variant="outline">{t}</Badge>)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2"><Folder size={18}/><h4 className="font-semibold">{p.title}</h4></div>
                  <p className="text-sm text-slate-600 mb-3">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-3">{p.tags.map((t)=> <Badge key={t} variant="secondary">{t}</Badge>)}</div>
                  <p className="text-xs text-slate-500 mb-4">Impacto: {p.impact}</p>
                  <div className="flex gap-2">
                    {p.links.github && (
                      <Button asChild variant="outline" size="sm" className="gap-2"><a href={p.links.github} target="_blank" rel="noreferrer"><Github size={14}/> Código</a></Button>
                    )}
                    {p.links.demo && (
                      <Button asChild variant="ghost" size="sm" className="gap-1"><a href={p.links.demo} target="_blank" rel="noreferrer">Demo <ExternalLink size={14}/></a></Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="py-10">
          <h3 className="text-2xl font-bold mb-6">Experiencia</h3>
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <Card key={e.empresa} className="border-l-4 border-l-slate-900/60">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">{e.empresa}</h4>
                      <p className="text-sm text-slate-600">{e.rol}</p>
                    </div>
                    <span className="text-xs text-slate-500">{e.periodo}</span>
                  </div>
                  <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
                    {e.detalles.map((d,i)=> <li key={i}>{d}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SOBRE MI / EDUCACION */}
        <section id="sobre-mi" className="py-10">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2">Sobre mí</h3>
                <p className="text-slate-700 leading-relaxed">
                  Me entusiasma trabajar cerca de usuarios reales y medir el impacto de cada iteración.
                  Disfruto del trabajo en equipo, el mentoring de juniors y el cuidado del detalle
                  (accesibilidad, rendimiento, DX).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2">Educación</h3>
                <ul className="space-y-2">
                  {EDUCATION.map((ed)=> (
                    <li key={ed.centro} className="text-slate-700">
                      <div className="font-semibold">{ed.centro}</div>
                      <div className="text-sm text-slate-500">{ed.periodo}</div>
                      <ul className="text-sm list-disc pl-5 mt-1">
                        {ed.detalles.map((t,i)=> <li key={i}>{t}</li>)}
                      </ul>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-14">
          <Card className="border-dashed">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Contacto</h3>
              <p className="text-slate-600 mb-4">¿Colaboramos? Escríbeme y te respondo.</p>
              <div className="grid md:grid-cols-3 gap-3">
                <Input placeholder="Tu nombre" />
                <Input placeholder="Tu email" type="email" />
                <Input placeholder="Asunto" />
              </div>
              <Textarea placeholder="Mensaje" className="mt-3" rows={5} />
              <div className="mt-4">
                <Button className="gap-2" disabled>
                  Enviar (demo)
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.nombre}. Construido con React, Tailwind y shadcn/ui.
        </footer>
      </main>
    </div>
  );
}
