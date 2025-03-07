import React from 'react'
import CTAButtons from './CTAButtons'

const Section1 = () => {
	return (
		<div className="container text-center">
			<div className="relative mx-auto w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
				<h2 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
					Travel Shopping <br /> Next.js template 🏠
				</h2>
				<p className="mx-auto mt-8 text-pretty text-base font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
					Chisfis is a Next.js 14, TypeScript and Tailwind CSS template, a
					perfect starting point for your next Booking online and Real Estate
					site. Stay, Hotel, Car, Experiences, Real Estate, Flight, Property,
					Travel, Tour...
				</p>
			</div>

			<CTAButtons />
		</div>
	)
}

export default Section1
