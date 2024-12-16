import { CONSTANTS } from '@/constants/constants'
import React from 'react'
import Heading from './Heading'

const data = [
	{
		q: 'How does it work?',
		a: `Chisfis Built with React, Typescript, and the latest Tailwindcss, Headless Ui modern. Perfect starting point for your next booking, car rental, travel... `,
	},

	{
		q: 'Free updates and support?',
		a: `Yes, we do! Free updates and support is lifetime 🎉`,
	},
	{
		q: 'Community and support forum?',
		a: `Please check  <a class="underline text-orange-400" href="${CONSTANTS.documentationUrl}">our docs page here</a>. If you need support, please open a ticket  <a class="underline text-orange-400" href="${CONSTANTS.supportUrl}">here</a> and we will help you quickly.`,
	},
]

const Section4 = () => {
	return (
		<section className="relative py-16">
			<Heading
				className="sm:text-center"
				sub=" Got a Question? We’ve got answers."
			>
				Frequently Asked Questions
			</Heading>

			{data.map((item, index) => (
				<div
					key={index}
					className="mx-auto mt-10 w-full rounded-3xl border border-slate-700 bg-slate-800/60 px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
				>
					<h3 className="text-lg font-bold text-blue-500 sm:text-xl md:text-2xl">
						{item.q}
					</h3>
					<div
						className="md:text-normal mt-2 text-base text-gray-300 sm:text-lg"
						dangerouslySetInnerHTML={{ __html: item.a }}
					></div>
				</div>
			))}
		</section>
	)
}

export default Section4
