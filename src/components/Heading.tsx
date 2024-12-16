import React, { FC } from 'react'

export interface HeadingProps {
	sub?: string
	className?: string
	children: React.ReactNode
}
const Heading: FC<HeadingProps> = ({ sub, children, className }) => {
	return (
		<div className={className}>
			<p className="sm:text-normal text-xs font-bold uppercase text-blue-600 sm:font-bold">
				{sub}
			</p>
			<h3 className="mt-1 text-3xl font-bold sm:mx-0 md:text-4xl lg:text-5xl">
				{children}
			</h3>
		</div>
	)
}

export default Heading
