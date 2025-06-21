import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Built with Next.js',
    description:
      'Chisfis is a well-structured, thoughtfully componentized Next.js project, giving you a codebase that’s productive and enjoyable to work in.',
  },
  {
    name: 'TypeScript',
    description:
      'Authored with the latest version of TypeScript by nerds who get way too much satisfaction out of getting the types just right, giving you the best possible developer experience. ',
  },
  {
    name: 'Simple to deploy',
    description:
      'Production-ready and easily deployed anywhere that you can deploy a Next.js application, like Vercel or Netlify.',
  },
  {
    name: '100% responsive',
    description:
      'Chisfis is designed to look great on any device, from mobile to desktop and beyond.',
  },
  {
    name: 'RTL support',
    description:
      'Chisfis supports right-to-left languages out of the box, so you can easily localize your site for a global audience.',
  },
  {
    name: 'Easy to customize',
    description:
      'Chisfis is designed to be easy to customize to your liking, with a well-organized file structure and clean code.',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              What’s included
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Chisfis comes with everything you need to get started building a
              beautiful, modern website. Here are just a few of the features
              you’ll find in the template that make it a great choice for your
              next project.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
