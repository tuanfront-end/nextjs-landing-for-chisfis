import React from 'react'
import { Button } from './Button'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const Section5 = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          ***
          <br />
          That&apos;s probably enough for now. <br /> What are you waiting for?
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-6">
          <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            View demo
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button href="/#" variant="outline" className="sm:px-7">
            Buy now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Section5
