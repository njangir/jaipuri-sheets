export const PRODUCT_CATEGORIES = [
  {
    label: 'For Dogs',
    value: 'dogs' as const,
    featured: [
      {
        name: 'Dog Food',
        href: `/products?category=dogs`,
        imageSrc: '/nav/dogs/dog (1).webp',
      },
      {
        name: 'Dog Grooming',
        href: '/products?category=dogs&sort=desc',
        imageSrc: '/nav/dogs/dog (3).webp',
      },
      {
        name: 'Dog Accessories',
        href: '/products?category=dogs',
        imageSrc: '/nav/dogs/dog (2).webp',
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
        imageSrc: '/nav/cats/cat (1).webp',
      },
      {
        name: 'Cat Grooming',
        href: '/products?category=cats&sort=desc',
        imageSrc: '/nav/cats/cat (3).webp',
      },
      {
        name: 'Cat Accessories',
        href: '/products?category=cats',
        imageSrc: '/nav/cats/cat (2).webp',
      },
    ],
  },
]