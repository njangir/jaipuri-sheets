import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  PackageSearch,
  ShieldCheck,
  Truck
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Authenticity Guarantee',
    Icon: ShieldCheck,
    description:
      'Shop with confidence knowing that each of our Jaipuri Block Print Bedsheets is meticulously handcrafted in Jaipur, ensuring the highest quality and authenticity.',
  },
  {
    name: 'Customer-First Approach',
    Icon: PackageSearch,
    description:
      'Join our community of satisfied customers who rave about the luxurious comfort and stunning beauty of our Jaipuri Block Print Bedsheets. Your satisfaction is our top priority!',
  },
  {
    name: 'Fast and Reliable Delivery',
    Icon: Truck,
    description:
      "Commited to timely and reliable delivery services. Next-day dispatch available.^",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className={'py-20 mx-auto text-center flex flex-col items-center max-w-2xl'}>
          <h1 className='text-xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          खम्मा घणी!{' '}
            <span className='text-rose-700 font-normal'>
              Buy fine quality <b>Jaipuri Bedsheets</b> at best price
            </span>
            !
        </h1>
          <p className='mt-6 text-lg max-w-prose'>
            We deal in finest quality <b>Jaipuri block print</b> bedsheets. With great pricing and <b>affordable</b> rates, get assured <b>quality</b> product delivered at your door step.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost' className="hidden">
              Contact for Bulk Orders &rarr;
            </Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'asc', limit: 4 }}
          href='/products'
          title='Brand new'
        />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}