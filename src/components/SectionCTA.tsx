import React from 'react'
import { Button } from './Button'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { buyNowLink, demoLink } from '@/constant'

const SectionCTA = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          ***
          <br />
          That&apos;s probably enough for now. <br /> What are you waiting for?
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-5">
          <Button href={demoLink} target="_blank">
            View demo
            <ArrowUpRightIcon className="ml-2 size-4" />
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
      </div>
    </section>
  )
}

export default SectionCTA
