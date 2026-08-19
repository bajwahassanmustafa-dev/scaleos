import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Platform } from '@/lib/site-data'
import { StatusPill } from './ui'
import { cn } from '@/lib/utils'

export function PlatformCard({ platform }: { platform: Platform }) {
  const Icon = platform.icon
  const topCapabilities = platform.capabilities.slice(0, 3)

  return (
    <Link
      href={platform.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {/* accent wash on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: platform.accent }}
        aria-hidden
      />

      {/* Header row */}
      <div className="relative flex items-start justify-between p-6 pb-0">
        <div
          className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface transition-colors duration-300 group-hover:border-foreground/15"
          style={{ color: platform.accent }}
        >
          <Icon className="size-5" />
        </div>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      {/* Identity */}
      <div className="relative flex flex-col gap-2 px-6 pt-5">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold tracking-[-0.01em]">{platform.name}</h3>
          <StatusPill status={platform.status} />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          {platform.industry}
        </p>
      </div>

      {/* Value proposition */}
      <div className="relative px-6 pt-3">
        <p className="text-pretty text-[0.95rem] font-medium leading-snug tracking-[-0.01em] text-foreground">
          {platform.valueProp}
        </p>
      </div>

      {/* Capability preview — subtle, grows on hover */}
      <div className="relative px-6 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {topCapabilities.map((cap) => (
            <span
              key={cap.label}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2.5 py-1 text-[0.7rem] font-medium text-foreground/70"
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: platform.accent }}
                aria-hidden
              />
              {cap.label}
            </span>
          ))}
        </div>
      </div>

      {/* Mini product visual */}
      <div className="relative mt-5 px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface/50">
          <div className="flex items-center gap-2 border-b border-border bg-surface/80 px-3 py-2">
            <div className="flex gap-1" aria-hidden>
              <span className="size-1.5 rounded-full bg-border" />
              <span className="size-1.5 rounded-full bg-border" />
              <span className="size-1.5 rounded-full bg-border" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 font-mono text-[0.6rem] text-muted-foreground">
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: platform.accent }}
              />
              {platform.slug}.scaleos.com
            </div>
          </div>
          <div className="flex">
            {/* mini sidebar */}
            <div className="hidden w-20 shrink-0 flex-col gap-1 border-r border-border bg-surface/40 p-2 sm:flex">
              {platform.modules.slice(0, 4).map((m, i) => (
                <div
                  key={m}
                  className={cn(
                    'rounded px-1.5 py-1 text-[0.6rem] font-medium',
                    i === 0 ? 'bg-card text-foreground shadow-soft' : 'text-muted-foreground',
                  )}
                >
                  {m}
                </div>
              ))}
            </div>
            {/* mini content */}
            <div className="flex-1 p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-foreground/70" />
                <span
                  className="rounded px-1.5 py-0.5 text-[0.55rem] font-medium text-white"
                  style={{ background: platform.accent }}
                >
                  {platform.modules[0]}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {platform.modules.slice(0, 3).map((m) => (
                  <div
                    key={m}
                    className="rounded-md border border-border bg-card p-1.5"
                  >
                    <p className="truncate text-[0.5rem] uppercase tracking-wide text-muted-foreground">
                      {m}
                    </p>
                    <div className="mt-1 h-1.5 w-8 rounded bg-foreground/60" />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex h-8 items-end gap-1">
                {[40, 60, 45, 72, 55, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5 ? platform.accent : 'oklch(0.205 0.014 265 / 0.12)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore CTA — revealed on hover */}
      <div className="relative mt-4 flex items-center justify-between px-6 pb-6 pt-2">
        <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          Explore {platform.name}
        </span>
        <span className="flex size-8 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}
