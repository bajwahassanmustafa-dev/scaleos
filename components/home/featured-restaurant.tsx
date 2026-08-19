import { Container, Section, Eyebrow, CTA } from '@/components/site/ui'
import { RestaurantDashboard } from '@/components/site/restaurant-dashboard'
import { RestaurantArchitecture } from '@/components/site/restaurant-architecture'
import { Reveal } from '@/components/site/reveal'

export function FeaturedRestaurant() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-3">
          <Reveal>
            <Eyebrow>Flagship Product</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem]">
              Run your restaurant from one connected system.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              From taking orders and managing inventory to understanding customers
              and tracking performance, Restaurant OS brings your restaurant&apos;s
              everyday operations together.
            </p>
          </Reveal>
        </div>

        {/* Dashboard + Architecture side by side */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <Reveal delay={80}>
            <RestaurantDashboard />
          </Reveal>
          <Reveal delay={160} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                More than a POS
              </span>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Restaurant OS is a complete restaurant operating system — point of
                sale, orders, QR menu, online ordering, delivery, inventory, staff,
                customers, loyalty, finance, analytics and website, connected as one.
              </p>
            </div>
            <RestaurantArchitecture />
            <div>
              <CTA href="/platforms/restaurant-os" variant="primary" size="lg" arrow>
                Explore Restaurant OS
              </CTA>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
