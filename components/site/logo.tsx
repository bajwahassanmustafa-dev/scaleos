import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Official ScaleOS mark — an isometric stack of building blocks with an
 * upward arrow, representing businesses scaling on a shared operating layer.
 *
 * The source artwork is a white mark on black, so it is presented inside a
 * rounded dark badge that keeps the original asset crisp and unmodified on
 * any background.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] bg-[#0a0a0a] ring-1 ring-border/60',
        className,
      )}
    >
      <Image
        src="/scaleos-logo.png"
        alt="ScaleOS"
        width={96}
        height={96}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  )
}
