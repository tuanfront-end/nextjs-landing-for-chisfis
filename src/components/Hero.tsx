import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoReact from '@/images/logos/reactjs.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoHtml from '@/images/logos/html5.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoNextjs from '@/images/logos/nextjs.svg'
import logoAlpine from '@/images/logos/alpinejs.svg'
import logoVite from '@/images/logos/vite.svg'
import Link from 'next/link'
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { buyNowLink, currentVersion, demoLink } from '@/constant'

export function Hero() {
  return (
    <Container className="overflow-hidden pt-8 pb-16 text-center sm:pt-10 2xl:pt-24">
      <Link
        href="#whats-new"
        className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1 ps-1 pe-4 text-sm font-medium ring-1 ring-slate-900/10 ring-inset hover:ring-slate-900/20"
      >
        <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
          {currentVersion}
        </span>
        <span className="text-slate-700">Now with an HTML edition</span>
        <ArrowRightIcon className="size-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <h1 className="mx-auto mt-2 max-w-3xl font-display text-4xl/[1.25] font-medium tracking-tight text-balance text-slate-900 sm:text-5xl md:text-6xl xl:max-w-5xl xl:text-7xl">
        Modern{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">travel booking</span>
        </span>{' '}
        template for Next.js &amp; HTML
      </h1>
      <p className="mx-auto mt-7 max-w-4xl text-xl tracking-tight text-balance text-slate-700">
        Stays, experiences, car rentals, flights and real estate in one
        template, with a booking that carries from search to checkout to
        confirmation. Both editions share the same pages and interactions.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-5">
        <Button href={demoLink} color="slate" target="_blank">
          View demo
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Button>
        <Button
          href={buyNowLink}
          variant="outline"
          className="sm:px-7"
          target="_blank"
        >
          Buy now
        </Button>
      </div>
      <div className="mt-20 2xl:mt-32">
        <p className="font-display text-base text-slate-600">
          Built with the tools you already use
        </p>
        <ul
          role="list"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-10 xl:gap-x-12"
        >
          {[
            { name: 'Next.js', logo: logoNextjs },
            { name: 'React', logo: logoReact },
            { name: 'TypeScript', logo: logoTypescript },
            { name: 'Tailwind CSS', logo: logoTailwind },
            { name: 'HTML5', logo: logoHtml },
            { name: 'Alpine.js', logo: logoAlpine },
            { name: 'Vite', logo: logoVite },
          ].map((company) => (
            <li key={company.name} className="flex">
              <Image
                src={company.logo}
                alt={company.name}
                unoptimized
                className="h-6 w-auto sm:h-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
