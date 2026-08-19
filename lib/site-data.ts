import {
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Trophy,
  Coffee,
  type LucideIcon,
} from 'lucide-react'

export type CapabilityGroup = {
  label: string
  items: string[]
}

export type Platform = {
  slug: string
  name: string
  industry: string
  short: string
  valueProp: string
  description: string
  status: 'Live' | 'Early Access' | 'In Development'
  icon: LucideIcon
  accent: string // oklch hue-adjusted brand tint for per-product identity
  modules: string[]
  capabilities: CapabilityGroup[]
  href: string
}

export const platforms: Platform[] = [
  {
    slug: 'restaurant-os',
    name: 'Restaurant OS',
    industry: 'Restaurant Operating System',
    short: 'The operating system built for restaurants.',
    valueProp: 'Run your restaurant from one connected system.',
    description:
      'From taking orders and managing inventory to understanding customers and tracking performance, Restaurant OS brings your restaurant\u2019s everyday operations together.',
    status: 'Early Access',
    icon: UtensilsCrossed,
    accent: 'oklch(0.58 0.15 40)',
    modules: [
      'Point of Sale',
      'Orders',
      'QR Menu',
      'Online Ordering',
      'Delivery Integrations',
      'Inventory',
      'Staff Management',
      'Customer Management',
      'Loyalty',
      'Finance',
      'Analytics',
      'Restaurant Website',
    ],
    capabilities: [
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
    ],
    href: '/platforms/restaurant-os',
  },
  {
    slug: 'property-os',
    name: 'Property OS',
    industry: 'Property & Real Estate Operating System',
    short: 'One system for the entire property lifecycle.',
    valueProp: 'Bring your property operations into one connected system.',
    description:
      'Property OS brings property information, operational workflows and tenant relationships together so your portfolio runs from a single connected system.',
    status: 'In Development',
    icon: Building2,
    accent: 'oklch(0.55 0.13 210)',
    modules: [
      'Listings',
      'Leasing',
      'Tenants',
      'Maintenance',
      'Documents',
      'Payments',
      'Reporting',
    ],
    capabilities: [
      {
        label: 'Operate',
        items: ['Listings', 'Leasing', 'Maintenance'],
      },
      {
        label: 'Connect',
        items: ['Tenants', 'Documents', 'Payments'],
      },
      {
        label: 'Understand',
        items: ['Reporting'],
      },
    ],
    href: '/platforms/property-os',
  },
  {
    slug: 'ecommerce-os',
    name: 'E-commerce OS',
    industry: 'E-commerce Business Operating System',
    short: 'Run the entire online business in one place.',
    valueProp: 'Bring your online business operations together in one place.',
    description:
      'E-commerce OS unifies products, orders, customers and business performance so your online store operates as one connected system.',
    status: 'In Development',
    icon: ShoppingBag,
    accent: 'oklch(0.55 0.15 300)',
    modules: [
      'Catalog',
      'Orders',
      'Fulfilment',
      'Customers',
      'Marketing',
      'Payments',
      'Analytics',
    ],
    capabilities: [
      {
        label: 'Operate',
        items: ['Catalog', 'Orders', 'Fulfilment'],
      },
      {
        label: 'Connect',
        items: ['Customers', 'Payments'],
      },
      {
        label: 'Grow',
        items: ['Marketing', 'Analytics'],
      },
    ],
    href: '/platforms/ecommerce-os',
  },
  {
    slug: 'sports-os',
    name: 'Sports OS',
    industry: 'Sports Business Operating System',
    short: 'The operating layer for sports businesses.',
    valueProp: 'Run your sports business or facility with one connected operating system.',
    description:
      'Sports OS coordinates members, scheduling, facilities and payments so your sports business or facility runs from one connected system.',
    status: 'In Development',
    icon: Trophy,
    accent: 'oklch(0.58 0.14 150)',
    modules: [
      'Memberships',
      'Scheduling',
      'Facilities',
      'Teams',
      'Bookings',
      'Payments',
      'Insights',
    ],
    capabilities: [
      {
        label: 'Operate',
        items: ['Memberships', 'Scheduling', 'Facilities'],
      },
      {
        label: 'Connect',
        items: ['Teams', 'Bookings', 'Payments'],
      },
      {
        label: 'Grow',
        items: ['Insights'],
      },
    ],
    href: '/platforms/sports-os',
  },
  {
    slug: 'coffee-shop-os',
    name: 'Coffee Shop OS',
    industry: 'Coffee Shop Operating System',
    short: 'Built for the pace of a coffee shop.',
    valueProp: 'Purpose-built technology for the everyday operations of modern coffee shops.',
    description:
      'Coffee Shop OS brings fast point of sale, mobile orders, inventory and loyalty into one system designed for the speed and rhythm of coffee service.',
    status: 'In Development',
    icon: Coffee,
    accent: 'oklch(0.5 0.1 60)',
    modules: [
      'Point of Sale',
      'Mobile Orders',
      'Inventory',
      'Loyalty',
      'Staff',
      'Reporting',
    ],
    capabilities: [
      {
        label: 'Operate',
        items: ['Point of Sale', 'Mobile Orders', 'Staff'],
      },
      {
        label: 'Connect',
        items: ['Inventory', 'Loyalty'],
      },
      {
        label: 'Understand',
        items: ['Reporting'],
      },
    ],
    href: '/platforms/coffee-shop-os',
  },
]

export function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug)
}

export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Digital Marketing',
    description:
      'Marketing strategy, campaign planning, audience research and growth strategy.',
    points: ['Growth strategy', 'Audience research', 'Campaign planning'],
  },
  {
    title: 'Paid Advertising',
    description:
      'Meta Ads, Google Ads, campaign strategy, targeting, testing and optimization.',
    points: ['Meta & Google Ads', 'Targeting & testing', 'Optimization'],
  },
  {
    title: 'Social Media',
    description:
      'Social strategy, content planning, content creation, management and community engagement.',
    points: ['Content planning', 'Creation & management', 'Community'],
  },
  {
    title: 'SEO',
    description:
      'Technical SEO, on-page SEO, keyword strategy, content optimization and local SEO.',
    points: ['Technical & on-page', 'Keyword strategy', 'Local SEO'],
  },
  {
    title: 'Websites & Digital Experiences',
    description:
      'Business websites, landing pages, e-commerce websites, UI/UX and conversion optimization.',
    points: ['Websites & landing pages', 'UI/UX design', 'Conversion'],
  },
  {
    title: 'AI & Business Systems',
    description:
      'AI-powered workflows, business automation, AI marketing systems, integrations and custom business platforms.',
    points: ['AI workflows', 'Automation', 'Custom platforms'],
  },
]

export const nav = [
  { label: 'Platforms', href: '/platforms' },
  { label: 'Services', href: '/services' },
  { label: 'Vision', href: '/vision' },
  { label: 'About', href: '/about' },
]
