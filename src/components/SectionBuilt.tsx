import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from './Container'

const features = [
  {
    name: 'Next.js v14',
  },
  {
    name: 'Tailwind CSS v3.4',
  },
  {
    name: 'React v18',
  },
  {
    name: 'TypeScript v5.3',
  },
  {
    name: 'Headlessui/react v2.2',
  },
  {
    name: '@vis.gl/react-google-maps',
  },
  {
    name: 'React datepicker v4.2',
  },
  {
    name: 'Framer motion v10',
  },
]

export default function SectionBuilt() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Built for developers
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Our templates are thoughtfully crafted with the latest and
              greatest versions of the tools we love so that they are easy to
              maintain, and fun to actually work on.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-8 text-base/7 text-gray-600 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
