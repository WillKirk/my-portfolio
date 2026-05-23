import FadeIn from '@/components/FadeIn'

export default function Story() {
  return (
    <section id="story" className="bg-white border-b border-gray-200 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">

          <FadeIn>
            <p className="font-mono text-xs text-green-primary tracking-widest uppercase mb-4">
              The story so far
            </p>
          </FadeIn>

          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-gray-700 text-base leading-relaxed">
                I started with a <span className="text-gray-900 font-medium">maths degree at Nottingham</span>, not
                the most obvious route into software, but it turns out that thinking analytically
                and breaking problems into pieces is exactly what coding rewards.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-700 text-base leading-relaxed">
                A bootcamp during the pandemic got me into web development properly, and four years
                at <span className="text-gray-900 font-medium">Wine-Searcher</span> taught me how real products
                are built; messy legacy codebases, cross-functional teams, deployment pipelines and
                all. I shipped everything from Shopify integrations to internal tooling.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-gray-700 text-base leading-relaxed">
                Now I&apos;m doing an <span className="text-gray-900 font-medium">MSc in Computer Science at UEL</span>,
                and building side projects to push into React, TypeScript and Next.js;
                the areas I haven&apos;t had the chance to use professionally yet, but intend to.
              </p>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  )
}