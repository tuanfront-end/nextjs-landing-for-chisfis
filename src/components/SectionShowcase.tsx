import Image from 'next/image'
import { Container } from '@/components/Container'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import homestayImg from '@/images/home/hotel.png'
import carImg from '@/images/home/car.png'
import experienceImg from '@/images/home/experience.png'
import realestateImg from '@/images/home/realestate.png'
import flightImg from '@/images/home/flight.png'
import home2Img from '@/images/home/home-2.png'
import Link from 'next/link'
import { Button } from './Button'

const homeDemos = [
  {
    img: homestayImg,
    text: 'Homestay',
    subText: 'Homestay',
    link: 'https://chisfis-nextjs.vercel.app/',
  },
  {
    img: realestateImg,
    text: 'Real Estate',
    subText: 'Real Estate',
    link: 'https://chisfis-nextjs.vercel.app/',
  },
  {
    img: carImg,
    text: 'Car Rental',
    subText: 'Car Rental',
    link: 'https://chisfis-nextjs.vercel.app/home-2',
  },
  {
    img: experienceImg,
    text: 'Experience',
    subText: 'Experience',
    link: 'https://chisfis-nextjs.vercel.app/home-3',
    tags: [],
  },

  {
    img: flightImg,
    text: 'Flight',
    subText: 'Flight',
    link: 'https://chisfis-nextjs.vercel.app/home-2',
  },
  {
    img: home2Img,
    text: 'Home 2',
    subText: 'Home 2',
    link: 'https://chisfis-nextjs.vercel.app/home-3',
    tags: [],
  },
]

export function SectionShowcase() {
  return (
    <section className="relative bg-slate-50 pt-20 pb-28 sm:py-32" id="demos">
      <svg
        aria-hidden="true"
        className="absolute inset-0 right-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-black opacity-70"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Explore pre-built home pages.
          </h2>
          <p className="mt-6 text-xl tracking-tight">
            Full suite of pages for hotel, homestay, flight, car rental,
            experience, and property booking websites.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {homeDemos.map((item, index) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
              className="group flex flex-col"
            >
              <div className="rounded-2xl bg-blue-600 p-2">
                <div className="relative aspect-14/16 w-full">
                  <Image
                    src={item.img}
                    alt={item.text}
                    className="rounded-xl object-cover object-top brightness-100 transition-all duration-300 group-hover:brightness-75"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    fill
                    priority
                  />

                  <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowUpRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 px-2">
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.text}
                </h3>
                <ArrowUpRightIcon className="size-6" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button href="/#" color="slate">
            View more pages
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
