import { platforms } from '@/lib/site-data'
import { Container, Section, SectionHeader, ArrowLink } from '@/components/site/ui'
import { PlatformCard } from '@/components/site/platform-card'
import { Reveal } from '@/components/site/reveal'

export function PlatformGrid() {
  return (
    <Section id="ecosystem" className="border-t border-border">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="The Ecosystem"
              title="Operating systems built around the way your business works."
              description="Every industry has different workflows, challenges and priorities. ScaleOS brings the tools and operations that matter into purpose-built systems designed for each business."
            />
          </Reveal>
          <Reveal delay={80}>
            <ArrowLink href="/platforms">View all platforms</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <PlatformCard platform={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
