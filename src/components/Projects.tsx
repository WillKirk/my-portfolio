import { ArrowUpRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

type Project = {
  number: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  status: 'live' | 'in-progress' | 'coming-soon'
}

const projects: Project[] = [
  {
    number: '01',
    title: 'FinTrack',
    description:
      'A personal finance dashboard to track income, expenses, budgets and savings goals. Built with multi-user auth, data visualisations and a guest demo mode so anyone can try it without signing up.',
    tech: ['Next.js', 'TypeScript', 'MySQL', 'NextAuth', 'Recharts'],
    github: 'https://github.com/WillKirk/fintrack',
    live: 'https://fintrack-wk.vercel.app/dashboard',
    status: 'live',
  },
  {
    number: '02',
    title: 'AirCargo Realtime',
    description:
      'A web-based SQL query interface built for a fictional airfreight business as part of university coursework. Provides a simple frontend for running queries against a relational database of flights, cargo, customers and routes.',
    tech: ['Python', 'Flask', 'MySQL', 'AWS EC2', 'AWS RDS'],
    github: 'https://github.com/WillKirk/aircargo-realtime',
    status: 'live',
  },
  {
    number: '03',
    title: 'Abney Village',
    description: 'A village website for Abney in the Peak District. Built with Python and Flask, hosted on Vercel with Cloudflare R2 for image storage. Features village information, photo gallery, Google Maps integration and a contact form for village hall bookings.',
    tech: ['Python', 'Flask', 'Tailwind CSS', 'TypeScript', 'Cloudflare R2', 'boto3', 'Vercel'],
    github: 'https://github.com/WillKirk/abney-village-site',
    live: 'https://abney-hope-valley.co.uk/',
    status: 'live',
  },
]

const statusStyles = {
  live: 'bg-green-subtle text-green-primary border border-green-light',
  'in-progress': 'bg-green-subtle text-green-primary border border-green-light',
  'coming-soon': 'bg-gray-100 text-gray-400 border border-gray-200',
}

const statusLabels = {
  live: 'View code',
  'in-progress': 'In progress',
  'coming-soon': 'Coming soon',
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white border-b border-gray-200 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <p className="font-mono text-xs text-green-primary tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-3">
            Things I&apos;ve built
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Side projects and coursework built to learn, explore and ship.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <FadeIn key={project.number} delay={i * 0.1}>
              <div className="group bg-gray-50 hover:border-green-primary border border-gray-200 rounded-2xl p-8 transition-colors duration-200">
                <div className="flex items-center justify-end gap-3 mb-4">

                    {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-green-primary transition-colors duration-200 flex items-center gap-1 font-medium"
                        >
                        GitHub <ArrowUpRight size={14} />
                    </a>
                    )}
                    {project.live && (
                      <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-green-primary transition-colors duration-200 flex items-center gap-1 font-medium"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                    )}

                </div>

                <p className="font-mono text-xs text-gray-400 mb-2">{project.number}</p>
                <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="border border-dashed border-gray-200 rounded-2xl p-8 flex items-center justify-center">
              <p className="text-gray-400 text-sm">More projects coming soon</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}