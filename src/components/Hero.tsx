import { ArrowDown, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">

        <p className="text-green-primary font-mono text-s tracking-widest uppercase mb-4">
          Will Kirkpatrick
        </p>

        <h1 className="text-5xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6 max-w-2xl">
            Hi, I&apos;m <span className="text-green-primary">Will.</span>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed max-w-md mb-10">
            Full-stack developer based in London. Four years of commercial experience,
            maths degree, currently building in React and Next.js.
        </p>

        <div className="flex items-center gap-4 mb-16">
          <a
            href="#projects"
            className="bg-green-primary hover:bg-green-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            See my work
          </a>
          <a
            href="/will-kirkpatrick-cv.pdf"
            className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-5 py-2.5 rounded-lg transition-colors duration-200"
          target="_blank">
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/WillKirk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-green-primary transition-colors duration-200 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/will-kirkpatrick-937b6b1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-green-primary transition-colors duration-200 text-sm"
          >
            LinkedIn
          </a>
          <span className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={15} />
            London, UK
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}