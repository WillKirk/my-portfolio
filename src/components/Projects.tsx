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
  {
    number: '04',
    title: 'Steam Dashboard',
    description: 'A personal Steam stats dashboard showing game library, playtime, and achievements. Built with Python and Flask, using the Steam Web API, hosted on Vercel.',
    tech: ['Python', 'Flask', 'Steam API', 'Chart.js', 'Vercel'],
    github: 'https://github.com/WillKirk/steam-dashboard',
    live: 'https://steam-dashboard-wk.vercel.app/',
    status: 'live',
  },
  {
    number: '05',
    title: 'Gaming Quiz',
    description: 'A multiple choice gaming quiz built with vanilla JavaScript, fetching questions from the Open Trivia Database API.',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    github: 'https://github.com/WillKirk/quiz-app',
    live: 'https://quiz-app-wk.netlify.app/',
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                {projects.map((project, i) => (
                    <FadeIn key={project.number} delay={i * 0.1}>
                        <div className="group bg-gray-50 hover:border-green-primary border border-gray-200 rounded-2xl p-8 transition-colors duration-200 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-mono text-xs text-gray-400 mb-2">{project.number}</p>
                                <div className="flex items-center gap-3">
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
                            </div>

                        
                            <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
                            {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                            {project.description}
                            </p>

                            <div className="relative mt-auto">
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
                                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                    {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-md whitespace-nowrap shrink-0"
                                    >
                                    {t}
                                    </span>
                                    ))}
                                </div>
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