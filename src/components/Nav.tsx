import React from 'react'

import { CONSTANTS } from '@/constants/constants'
import Logo from './Logo'

export const Nav = () => {
	return (
		<section className="container relative pt-6">
			<div className="flex justify-between gap-8 sm:items-center">
				<a href="#home">
					<h1 className="sr-only">Chisfis - Nextjs template </h1>
					<Logo />
				</a>
				<div className="ml-2 flex flex-wrap items-center justify-end gap-x-4 gap-y-2.5 text-sm md:gap-x-8">
					<a
						href={CONSTANTS.documentationUrl}
						className="block font-medium hover:text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Docs
					</a>
					<a
						href={CONSTANTS.supportUrl}
						className="block font-medium hover:text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						Helps
					</a>
					<a
						href={CONSTANTS.liveDemoUrl}
						className="block font-medium hover:text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						<abbr title="Live Demo">Live demo</abbr>
					</a>
					<a
						className="block font-medium hover:text-blue-500"
						href={CONSTANTS.purchaseUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<abbr title="Purchase">Purchase now</abbr>
					</a>
				</div>
			</div>
		</section>
	)
}
