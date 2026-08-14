export type Category = {
  slug: string
  name: string
  description: string
  href: string
}

export const categories: Category[] = [
  {
    slug: 'laptops',
    name: 'Laptops',
    description: 'Portable computing, performance reviews, and buying guidance.',
    href: '/categories/laptops'
  },
  {
    slug: 'gaming-pcs',
    name: 'Gaming PCs',
    description: 'Desktop gaming builds, upgrades, and performance insights.',
    href: '/categories/gaming-pcs'
  },
  {
    slug: 'graphics-cards',
    name: 'Graphics Cards',
    description: 'GPU recommendations, specs, and value comparisons.',
    href: '/categories/graphics-cards'
  },
  {
    slug: 'monitors',
    name: 'Monitors',
    description: 'Refresh rates, panel types, and display quality analysis.',
    href: '/categories/monitors'
  },
  {
    slug: 'projectors',
    name: 'Projectors',
    description: 'Home theater and gaming projector buying advice.',
    href: '/categories/projectors'
  },
  {
    slug: 'pc-components',
    name: 'PC Components',
    description: 'Motherboards, CPUs, memory, storage, and system planning.',
    href: '/categories/pc-components'
  },
  {
    slug: 'gaming-accessories',
    name: 'Gaming Accessories',
    description: 'Headsets, keyboards, mice, and upgrade essentials.',
    href: '/categories/gaming-accessories'
  },
  {
    slug: 'home-electronics',
    name: 'Home Electronics',
    description: 'Smart home, media, and everyday consumer tech coverage.',
    href: '/categories/home-electronics'
  }
]

export default categories
