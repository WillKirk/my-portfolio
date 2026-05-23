import FadeIn from '@/components/FadeIn'

const hobbies = [
  {
    emoji: '🎾',
    name: 'Tennis',
    description: 'Roger Federer fanboy.',
  },
  {
    emoji: '🚗',
    name: 'Cars',
    description: 'Long time enthusiast. Anything from vintage to modern sports car as long as there\'s some class.',
  },
  {
    emoji: '🎮',
    name: 'Gaming',
    description: 'Long-time hobby. Anything with a good story.',
  },
  {
    emoji: '🗣️',
    name: 'Spanish',
    description: 'B2/C1. Who doesn\'t want to live in Marbella',
  },
  {
    emoji: '📈',
    name: 'Finance & Maths',
    description: 'Aspiring angel investor',
  },
  {
    emoji: '⛷️',
    name: 'Skiing',
    description: 'Annual. Non-negotiable.',
  },
]

export default function Human() {
  return (
    <section id="human" className="bg-gray-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <p className="font-mono text-xs text-green-primary tracking-widest uppercase mb-4">
            Human
          </p>
          <h2 className="text-3xl font-medium text-white tracking-tight mb-3">
            Outside of code
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            The other stuff that makes me tick.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {hobbies.map((hobby, i) => (
            <FadeIn key={hobby.name} delay={i * 0.08}>
              <div className="group bg-white/5 hover:bg-green-primary/10 border border-white/10 hover:border-green-primary/40 rounded-2xl p-6 transition-all duration-200 h-full">
                <div className="text-2xl mb-3">{hobby.emoji}</div>
                <h3 className="text-sm font-medium text-white mb-1">{hobby.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{hobby.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}