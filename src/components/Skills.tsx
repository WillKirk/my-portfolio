import FadeIn from '@/components/FadeIn'

const professionalSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'PHP', level: 80 },
  { name: 'SQL/MySQL', level: 85 },
  { name: 'AWS', level: 75 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'GraphQL', level: 65 },
  { name: 'Git', level: 85 },
  { name: 'Oracle', level: 50 },
]

const learningSkills = [
  { name: 'TypeScript', level: 55 },
  { name: 'React', level: 50 },
  { name: 'Next.js', level: 40 },
  { name: 'Node.js', level: 45 },
  { name: 'Docker', level: 30 },
]

type Skill = {
  name: string
  level: number
}

function SkillRow({ skill, learning = false }: { skill: Skill; learning?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600 w-28 shrink-0">{skill.name}</span>
      <div className="flex-1 h-1 bg-gray-100 rounded-full">
        <div
          className={`h-1 rounded-full ${learning ? 'bg-green-light border border-green-primary' : 'bg-green-primary'}`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
      {learning && (
        <span className="font-mono text-xs text-green-primary shrink-0">↑</span>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 border-b border-gray-200 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <p className="font-mono text-xs text-green-primary tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-3">
            What I work with
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Solid fill = professional experience.{' '}
            <span className="text-green-primary">Light fill with arrow</span> = actively learning.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-6">
                Professional
              </h3>
              <div className="space-y-4">
                {professionalSkills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-6">
                Learning
              </h3>
              <div className="space-y-4">
                {learningSkills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} learning />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}