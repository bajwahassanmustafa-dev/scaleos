import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const groups = [
  {
    label: 'Operate',
    items: ['Point of Sale', 'Orders', 'Staff Management'],
  },
  {
    label: 'Sell',
    items: ['QR Menu', 'Online Ordering', 'Delivery Integrations'],
  },
  {
    label: 'Manage',
    items: ['Inventory', 'Finance', 'Customer Management'],
  },
  {
    label: 'Grow',
    items: ['Loyalty', 'Analytics', 'Restaurant Website'],
  },
]

export function RestaurantArchitecture({ className }: { className?: string }) {
  return (
    <div className={cn('w-full', className)}>
      {/* Equation header */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        {['POS', 'Orders', 'QR Menu', 'Online Ordering', 'Delivery', 'Inventory', 'Staff', 'Customers', 'Loyalty', 'Finance', 'Analytics', 'Website'].map(
          (part, i, arr) => (
            <span key={part} className="flex items-center gap-2">
              <span className="font-mono text-[0.7rem] font-medium text-muted-foreground">
                {part}
              </span>
              {i < arr.length - 1 ? (
                <span className="text-muted-foreground/40">+</span>
              ) : null}
            </span>
          ),
        )}
        <span className="mx-1 text-muted-foreground/40">=</span>
        <span className="rounded-md bg-primary px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-primary-foreground">
          ONE RESTAURANT OS
        </span>
      </div>

      {/* Capability architecture grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <div
            key={group.label}
            className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
                {group.label}
              </span>
              <span className="font-mono text-[0.65rem] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium leading-tight tracking-[-0.01em]"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Connection flow line */}
      <div className="mt-3 flex items-center justify-center gap-2 py-2">
        <span className="h-px w-12 bg-border" aria-hidden />
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          Connected as one system
        </span>
        <span className="h-px w-12 bg-border" aria-hidden />
      </div>
    </div>
  )
}
