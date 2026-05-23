import { ArrowUpRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const links = [
  {
    label: 'Email',
    value: 'willkirkpatrick097@gmail.com',
    href: 'mailto:willkirkpatrick097@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/WillKirk',
    href: 'https://github.com/WillKirk',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/will-kirkpatrick',
    href: 'https://www.linkedin.com/in/will-kirkpatrick-937b6b1b2/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">

          <FadeIn>
            <p className="font-mono text-xs text-green-primary tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-3">
              Let&apos;s talk
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              I&apos;m open to full-stack and frontend roles in London. If something about
              my background resonates — or you just want to chat — I&apos;d love to hear from you.
            </p>
          </FadeIn>

          <div className="space-y-3">
            {links.map((link, i) => (
              <FadeIn key={link.label} delay={i * 0.1}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-between bg-white hover:border-green-primary border border-gray-200 rounded-xl px-5 py-4 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-gray-400 w-16">{link.label}</span>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {link.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-300 group-hover:text-green-primary transition-colors duration-200"
                  />
                </a>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">
          WK<span className="text-green-primary">.</span>
        </span>
        <span className="text-xs text-gray-400 font-mono">
          Built with Next.js & TypeScript
        </span>
      </div>
    </section>
  )
}