import Image from 'next/image'
import { Container } from '@/components/Container'
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import homestayImg from '@/images/home/hotel.png'
import carImg from '@/images/home/car.png'
import experienceImg from '@/images/home/experience.png'
import homeImg from '@/images/home/home.png'
import homeRTLImg from '@/images/home/home-rtl.png'
import flightImg from '@/images/home/flight.png'
import searchWithMapImg from '@/images/home/search-with-map.png'
import searchImg from '@/images/home/search.png'
import Link from 'next/link'
import { Button } from './Button'
import { demoLink, demoLinkRTL } from '@/constant'
import clsx from 'clsx'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

const homeDemos = [
  {
    img: homeImg,
    text: 'Home',
    link: demoLink,
  },
  {
    img: homeRTLImg,
    text: 'Home (RTL)',
    link: demoLinkRTL,
  },
  {
    img: homestayImg,
    text: 'Stays',
    link: demoLink + 'stay',
  },
  {
    img: carImg,
    text: 'Car rentals',
    link: demoLink + 'car',
  },
  {
    img: experienceImg,
    text: 'Experiences',
    link: demoLink + 'experience',
  },
  {
    img: flightImg,
    text: 'Flights',
    link: demoLink + 'flight',
  },
  {
    img: searchWithMapImg,
    text: 'Search with map',
    link: demoLink + 'stay-search-with-map',
  },
  {
    img: searchImg,
    text: 'Search',
    link: demoLink + 'stay-search',
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
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            30+ pages
          </h2>
          <p className="mt-6 text-xl tracking-tight">
            Full suite of pages for hotel, homestay, experience , car rental,
            and flight booking websites.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {homeDemos.map((item, index) => (
            <div
              key={index}
              className={clsx(
                index === 0 && 'col-spdan-2',
                'group relative flex flex-col',
              )}
            >
              <div className="relative w-full border-indigo-100">
                <Image
                  src={item.img}
                  alt={item.text}
                  className="rounded-xl object-cover object-top brightness-100 transition-all duration-300 group-hover:brightness-80"
                  sizes={`(max-width: 640px) 100vw, (max-width: 768px) 100vw, ${index === 0 ? '100vw' : '33vw'}`}
                  priority
                />

                <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowUpRightIcon className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2.5 px-2">
                <h3 className="relative text-base font-semibold tracking-tight before:absolute before:top-full before:left-0 before:mt-1.5 before:block before:h-1 before:w-full before:rounded-full before:bg-fuchsia-200/80">
                  {item.text}
                </h3>
                <ChevronDoubleRightIcon className="size-4" />
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                key={index}
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button href={demoLink} target="_blank" color="slate">
            View more pages
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
