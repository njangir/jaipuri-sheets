export const PRODUCT_CATEGORIES = [
  {
    label: 'For Dogs',
    value: 'dogs' as const,
    featured: [
      {
        name: 'Dog Food',
        href: `/products?category=dogs`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Dog Grooming',
        href: '/products?category=dogs&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Dog Accessories',
        href: '/products?category=dogs',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'For Cats',
    value: 'cats' as const,
    featured: [
      {
        name: 'Cat Food',
        href: `/products?category=cats`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Cat Grooming',
        href: '/products?category=cats&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Cat Accessories',
        href: '/products?category=cats',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]