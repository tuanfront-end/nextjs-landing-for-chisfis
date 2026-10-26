import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from './Container'

const features = [
  {
    name: 'Next.js 16 and React 19',
    description:
      'The App Router, with every page prerendered at build time. Demo content lives in plain TypeScript arrays under src/data, each behind an async getter you can swap for a real fetch.',
  },
  {
    name: 'An HTML edition',
    description:
      'The same pages as static .html files, styled with Tailwind CSS 4, made interactive with Alpine.js 3 and built with Vite. For projects that have no place for React.',
  },
  {
    name: 'Tailwind CSS 4 and TypeScript',
    description:
      'Colours and type are tokens in one @theme block. Change the primary scale there and every component follows; nothing hardcodes a hex value.',
  },
  {
    name: 'Keyboard and screen readers',
    description:
      'Focus rings on every control, dialogs with names, fields that announce when they are invalid, and photos described by the listing they belong to.',
  },
  {
    name: 'Static by default',
    description:
      'No backend and no database. Every dynamic route refuses unknown paths, so the site deploys as static files to Vercel, Netlify, Cloudflare Pages or Amplify.',
  },
  {
    name: 'Search engines and sharing',
    description:
      'Each page names its own canonical address and share title, every page has a share image, and the sitemap and structured data are generated for you.',
  },
  {
    name: 'Right-to-left and dark mode',
    description:
      'One environment variable mirrors the layout for right-to-left languages, and a toggle in the header switches every page to dark.',
  },
  {
    name: 'Responsive, down to the booking bar',
    description:
      'On a phone, a bar along the bottom of every listing holds the price and the next step, and tables such as an itinerary turn into lists.',
  },
]

export default function SectionIncluded() {
  return (
    <section className="bg-white py-24 sm:py-32" id="features">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              What's included
            </h2>
            <p className="mt-6 text-base/7 text-pretty text-gray-600">
              Two editions of the same booking site, written to be read and
              changed. The README covers setup, customising and deploying, and a
              changelog tells you what moved in each release.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-5 text-blue-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
