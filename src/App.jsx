import { useMemo } from 'react'
import { Rocket, Code2, Lightbulb, Github, Linkedin, Mail, ExternalLink, Cpu, PenTool, Database, Globe, Workflow, Sparkles } from 'lucide-react'

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center shadow-md mb-4">
        <Icon size={22} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-900/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{project.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
        </div>
        <div className="shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white p-2.5">
          <project.icon size={20} />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{s}</span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        {project.links?.map((l) => (
          <a key={l.href} href={l.href} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900">
            {l.label} <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  )
}

function Skill({ icon: Icon, label, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="rounded-lg bg-gray-900 text-white p-2.5">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

export default function App() {
  const projects = useMemo(() => [
    {
      title: 'Platform Starter – SaaS Boilerplate',
      description: 'Architettura fullstack modulare con autenticazione, billing, dashboard e API-ready. Performance e DX al centro.',
      stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind', 'Vite'],
      icon: Workflow,
      links: [
        { label: 'Repository', href: 'https://github.com' },
        { label: 'Live', href: '#' },
      ],
    },
    {
      title: 'AI Product Studio',
      description: 'Microservizi per inferenza, orchestrazione di prompt e pipeline dati per esperienze AI real‑time.',
      stack: ['Python', 'FastAPI', 'Docker', 'OpenAI', 'Redis'],
      icon: Cpu,
      links: [
        { label: 'Case study', href: '#' },
      ],
    },
    {
      title: 'Design System & DX',
      description: 'Componenti accessibili, token di design e toolchain dev per scalare UI/UX su prodotti complessi.',
      stack: ['Storybook', 'Tailwind', 'Radix', 'Figma'],
      icon: PenTool,
      links: [
        { label: 'Guida', href: '#' },
      ],
    },
  ], [])

  return (
    <div id="home" className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-bold text-gray-900">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center shadow-sm">
                <Rocket size={18} />
              </div>
              <span>Full‑Stack Innovator</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-gray-600 hover:text-gray-900">Chi sono</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Competenze</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Progetti</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contatti</a>
              <div className="h-6 w-px bg-gray-200" />
              <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-gray-900"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-gray-900"><Linkedin size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-md font-medium hover:bg-gray-800">
                <Mail size={16} /> Contattami
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,.12),transparent_30%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles size={14} /> Fullstack Developer • Innovatore • Visionario
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Costruisco prodotti che uniscono visione e tecnologia
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Progetto sistemi scalabili end‑to‑end: dall’idea al prodotto in produzione. Esperto in architetture moderne, DX e design experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800">
                <Code2 size={18} /> Guarda i progetti
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Mail size={18} /> Parliamo del tuo progetto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <SectionTitle icon={Lightbulb} title="Chi sono" subtitle="Strategia, prodotto e codice: creo valore concreto con una visione a lungo termine." />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Sono un full‑stack developer con forte orientamento al prodotto. Amo progettare
              architetture pulite, pipeline efficienti e interfacce piacevoli. Guidato dalla
              curiosità, unisco creatività e rigore ingegneristico per trasformare visioni in
              esperienze reali.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Product‑Driven</Badge>
              <Badge>System Thinking</Badge>
              <Badge>AI‑Ready</Badge>
              <Badge>UX Oriented</Badge>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 shadow-sm">
            <p className="font-semibold">In breve</p>
            <ul className="mt-3 space-y-2 text-sm/6">
              <li>• 7+ anni tra startup e prodotti SaaS</li>
              <li>• Delivery rapido, qualità costante</li>
              <li>• Mentoring e cura della DX</li>
              <li>• Mentalità data‑informed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <SectionTitle icon={Database} title="Competenze" subtitle="Dallo stack web moderno alle integrazioni AI e infrastruttura cloud." />
        <div className="grid md:grid-cols-3 gap-6">
          <Skill icon={Globe} label="Frontend"
            desc="React, Vite, Tailwind, accessibilità, design system e performance." />
          <Skill icon={Database} label="Backend"
            desc="FastAPI, Python, Node, API design, sicurezza, autenticazione e caching." />
          <Skill icon={Workflow} label="DevOps & Cloud"
            desc="CI/CD, Docker, monitoring, deploy scalabili e osservabilità." />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <SectionTitle icon={Code2} title="Progetti selezionati" subtitle="Un assaggio del mio approccio alla risoluzione di problemi reali." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <SectionTitle icon={Mail} title="Contatti" subtitle="Raccontami la tua idea: possiamo costruire qualcosa di straordinario." />
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="text-gray-700">Preferisci una call o un messaggio? Ti rispondo in 24h.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"><Mail size={16}/> Email</a>
                <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"><Linkedin size={16}/> LinkedIn</a>
                <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"><Github size={16}/> GitHub</a>
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 border border-dashed border-gray-200 text-sm text-gray-600">
              Suggerimento: dimmi obiettivi, tempi e contesto. Preparo una proposta concreta.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Full‑Stack Innovator – Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="/test" className="text-xs hover:text-gray-900">Test backend</a>
            <a href="#home" className="text-xs hover:text-gray-900">Torna su</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
