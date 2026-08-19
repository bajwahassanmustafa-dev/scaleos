import { Container, Section, SectionHeader } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const pillars = [
  {
    label: 'Operate',
    title: 'Manage everyday business operations.',
    body: 'Run the daily work that keeps the business moving — from orders and bookings to staff and inventory — in one connected place.',
  },
  {
    label: 'Connect',
    title: 'Bring critical information together.',
    body: 'Stop juggling disconnected tools. ScaleOS connects the parts of the business that should have always talked to each other.',
  },
  {
    label: 'Understand',
    title: 'Gain visibility into what is happening.',
    body: 'See the whole business in one view — performance, operations and customers — without stitching reports together by hand.',
  },
  {
    label: 'Grow',
    title: 'Make better decisions with better systems.',
    body: 'Use connected information and better systems to make clearer decisions and grow the business with confidence.',
  },
]

export function PlatformWorkflow() {
  return (
    <Section className="border-t border-border bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="The ScaleOS approach"
            title="Built around the work that matters."
            description="Every ScaleOS platform follows the same philosophy — connecting the everyday work of running a business into one system designed around how it actually operates."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 70} className="bg-card">
              <div className="flex h-full flex-col gap-3 p-7">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {p.label}
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
