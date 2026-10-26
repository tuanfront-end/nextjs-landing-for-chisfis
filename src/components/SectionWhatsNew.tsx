import clsx from 'clsx'
import Link from 'next/link'
import { CheckIcon, HeartIcon } from '@heroicons/react/20/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Container } from '@/components/Container'
import { changelogLink, currentVersion } from '@/constant'

function Card({
  title,
  children,
  visual,
  className,
}: {
  title: string
  children: React.ReactNode
  visual: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-900/5',
        className,
      )}
    >
      <div className="flex min-h-48 items-center justify-center px-6 pt-6 sm:px-8 sm:pt-8">
        {visual}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-lg font-medium tracking-tight text-balance text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm/6 text-pretty text-slate-600">{children}</p>
      </div>
    </div>
  )
}

function Panel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'w-full max-w-xs rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-slate-900/5',
        className,
      )}
    >
      {children}
    </div>
  )
}

const editionTree = [
  {
    name: 'template/',
    note: 'Next.js 16 · React 19 · TypeScript',
    accent: true,
  },
  {
    name: 'html/',
    note: 'Tailwind CSS 4 · Alpine.js 3 · Vite',
    accent: true,
    isNew: true,
  },
  { name: 'documentation/', note: 'A guide for each edition' },
  { name: 'licensing/', note: 'One sheet covers both' },
]

function HtmlEditionCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 md:col-span-2 lg:col-span-4">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 size-96 rounded-full bg-blue-600/30 blur-3xl"
      />
      <div className="relative grid gap-10 p-6 sm:p-10 xl:grid-cols-2 xl:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-400">HTML edition</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-balance text-white sm:text-3xl">
            No framework, no server
          </h3>
          <p className="mt-4 text-sm/6 text-pretty text-slate-300">
            Every page layout of the Next.js version as a plain .html file, with
            the same dropdowns, date pickers and galleries, run by Alpine.js.
            Run{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-slate-100">
              npm run build
            </code>{' '}
            and the finished site opens straight from the folder.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 p-5 font-mono text-[0.8125rem] ring-1 ring-white/10">
          <p className="text-slate-400">chisfis-{currentVersion}/</p>
          <ul role="list" className="mt-3 space-y-3">
            {editionTree.map((item, index) => (
              <li key={item.name} className="flex gap-3">
                <span aria-hidden="true" className="text-slate-600">
                  {index === editionTree.length - 1 ? '└─' : '├─'}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span
                      className={item.accent ? 'text-white' : 'text-slate-400'}
                    >
                      {item.name}
                    </span>
                    {item.isNew && (
                      <span className="rounded-full bg-blue-500/20 px-2 py-px font-sans text-[0.6875rem] font-semibold text-blue-300">
                        New
                      </span>
                    )}
                  </span>
                  <span className="block font-sans text-xs text-slate-400">
                    {item.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function LighterPagesCard() {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-blue-50 p-6 ring-1 ring-blue-900/5 sm:p-10 md:col-span-2 lg:col-span-2">
      <div>
        <p className="text-sm font-semibold text-blue-600">Lighter pages</p>
        <p className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-6xl font-medium tracking-tight text-slate-900">
            0.8
          </span>
          <span className="text-xl font-medium text-slate-900">MB</span>
          <span className="text-base text-slate-400 line-through">6.9 MB</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          of photographs on the home page
        </p>
      </div>
      <dl className="mt-8 space-y-2.5 text-xs">
        <div className="flex items-center gap-3">
          <dt className="w-10 shrink-0 text-slate-500">2.3.1</dt>
          <dd className="h-2 flex-1 rounded-full bg-slate-300/70">
            <span className="sr-only">6.9 MB</span>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt className="w-10 shrink-0 font-medium text-blue-600">2.4.0</dt>
          <dd className="flex-1">
            <span className="block h-2 w-[12%] rounded-full bg-blue-600" />
            <span className="sr-only">0.8 MB</span>
          </dd>
        </div>
      </dl>
      <p className="mt-6 text-sm/6 text-slate-600">
        Each photo loads at the width it is drawn, resized by the CDN instead of
        your own image optimizer.
      </p>
    </div>
  )
}

const bookingSteps = ['Listing', 'Checkout', 'Confirmation']

function BookingVisual() {
  return (
    <Panel className="space-y-2.5">
      {bookingSteps.map((step) => (
        <div key={step} className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-slate-700">
            <CheckIcon className="size-4 text-blue-600" />
            {step}
          </span>
          <span className="font-medium text-slate-900 tabular-nums">
            $1,284
          </span>
        </div>
      ))}
      <p className="border-t border-slate-100 pt-2.5 text-xs text-slate-500">
        Shibuya loft · Nov 12 – 15 · 2 guests
      </p>
    </Panel>
  )
}

function SearchVisual() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="truncate rounded-full bg-white px-4 py-2 font-mono text-xs text-slate-500 shadow-sm ring-1 ring-slate-900/5">
        ?placeType=
        <span className="text-blue-600">hotel_room</span>&amp;price=
        <span className="text-blue-600">100-400</span>
      </div>
      <Panel>
        <p className="font-medium text-slate-900">Stays in Tokyo</p>
        <p className="mt-0.5 text-xs text-slate-500">Nov 12 – 15 · 3 guests</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white">
            Hotel room
          </span>
          <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white">
            $100 – $400
          </span>
          <span className="rounded-full px-2.5 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
            Clear all
          </span>
        </div>
      </Panel>
    </div>
  )
}

const currencies = ['$', '€', '£', '¥', '₫', 'A$']

function WishlistVisual() {
  return (
    <Panel className="flex items-center justify-between gap-4">
      <div className="flex flex-wrap gap-1.5">
        {currencies.map((symbol, index) => (
          <span
            key={symbol}
            className={clsx(
              'flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-medium',
              index === 2
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 ring-1 ring-slate-200',
            )}
          >
            {symbol}
          </span>
        ))}
      </div>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-50">
        <HeartIcon className="size-5 text-rose-500" />
      </span>
    </Panel>
  )
}

export function SectionWhatsNew() {
  return (
    <section id="whats-new" className="scroll-mt-8 py-20 sm:py-32">
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center">
          <p className="text-sm font-semibold text-blue-600">
            New in {currentVersion}
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-balance text-slate-900 sm:text-4xl md:text-5xl">
            The same template, now in plain HTML
          </h2>
          <p className="mt-6 text-lg tracking-tight text-balance text-slate-600">
            {`Version ${currentVersion} adds an HTML edition to the download.`}{' '}
            Pick Next.js if your project runs on React, or the HTML files if it
            doesn&apos;t. Both get the booking, search and wishlist updates
            below.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-6">
          <HtmlEditionCard />
          <LighterPagesCard />

          <Card
            title="A booking that holds together"
            visual={<BookingVisual />}
            className="lg:col-span-2"
          >
            Reserve carries the listing, dates and guests to checkout and on to
            the confirmation. All three quote one total, fees and tax included.
            Flights get a checkout of their own.
          </Card>
          <Card
            title="Search that lives in the address"
            visual={<SearchVisual />}
            className="lg:col-span-2"
          >
            Every search form and filter writes to the URL. The results narrow
            by place and guests, and a filtered page survives a reload or a
            share.
          </Card>
          <Card
            title="One wishlist, six currencies"
            visual={<WishlistVisual />}
            className="lg:col-span-2"
          >
            The heart saves to a single wishlist kept in the browser. The
            currency menu switches every price: cards, map pins, totals and the
            price slider.
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl px-2 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm/6 text-slate-600">
            Also in {currentVersion}: viewings and a mortgage calculator for
            real estate, an add-listing draft that survives a reload, demo
            listings with their own photos and hosts, and focus rings and named
            dialogs for keyboard and screen reader users.
          </p>
          <Link
            href={changelogLink}
            target="_blank"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-900"
          >
            Read the full changelog
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
