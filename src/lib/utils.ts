import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'INR'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'INR', notation = 'standard' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export function constructMetadata({
  title = 'Jaipuri Sheets',
  description = 'Best quality budget Jaipuri bedsheets!',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@n.jangir',
    },
    icons,
    metadataBase: new URL('https://main.d2n1gnvnee9zu1.amplifyapp.com/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}