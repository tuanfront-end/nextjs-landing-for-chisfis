import { CONSTANTS } from '@/constants/constants'
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Button from './Button'

interface Props {
	className?: string
}

const CTAButtons = ({ className = 'mt-12 ' }: Props) => {
	return (
		<div>
			<div
				className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
			>
				<Button href={CONSTANTS.liveDemoUrl}>
					Live demo
					<ArrowUpRightIcon className="ml-1 h-5 w-5" />
				</Button>

				<a
					href={CONSTANTS.purchaseUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center p-3 font-medium"
				>
					By theme
					<ArrowRightIcon className="ml-1 h-5 w-5" />
				</a>
			</div>
		</div>
	)
}

export default CTAButtons
