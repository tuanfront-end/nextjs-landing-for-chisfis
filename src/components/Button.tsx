import React, { FC } from 'react'

export interface ButtonProps {
	className?: string
	href?: string
	children: React.ReactNode
}

const Button: FC<ButtonProps> = ({
	className = 'text-sm',
	children,
	href = '#',
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-3 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-700 focus:ring-offset-2 md:px-6 md:focus:ring-2 ${className}`}
		>
			{children}
		</a>
	)
}

export default Button
