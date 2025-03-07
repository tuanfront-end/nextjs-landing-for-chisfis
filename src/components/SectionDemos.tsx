import React from 'react'
import home1 from '@/images/home/1.png'
import home2 from '@/images/home/2.png'
import home3 from '@/images/home/3.png'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import CTAButtons from './CTAButtons'

export const SectionDemos = () => {
	const data = [
		{
			img: home1,
			text: 'Home 1',
			subText: 'Home default',
			link: 'https://chisfis-nextjs.vercel.app/',
		},
		{
			img: home2,
			text: 'Home 2',
			subText: 'Real Estate',
			link: 'https://chisfis-nextjs.vercel.app/home-2',
		},
		{
			img: home3,
			text: 'Home 3',
			subText: 'Home demo',
			link: 'https://chisfis-nextjs.vercel.app/home-3',
			tags: [],
		},
	]

	const renderItem = (item: (typeof data)[number], index: number) => {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={item.link}
				key={index}
				className="flex flex-col"
			>
				<div className="relative">
					<Image
						src={item.img}
						alt={item.text}
						className="rounded-lg"
						sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
					/>
					<div className="group absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-slate-900 bg-opacity-0 text-slate-100 transition-all duration-200 hover:bg-opacity-40">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							<ArrowUpRightIcon className="h-6 w-6" />
						</div>
					</div>
				</div>
				<div className="p-3">
					<span className="flex items-center text-base font-medium capitalize text-slate-100">
						{item.text}
						<ArrowUpRightIcon className="ml-2 h-4 w-4" />
					</span>
					<span className="text-xs text-slate-400">{item.subText}</span>
				</div>
			</a>
		)
	}

	return (
		<div className="dark container text-slate-100">
			<p className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
				<span className="text-white"> 30+</span> inner pages.
			</p>

			<div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
				{data.map(renderItem)}
			</div>

			<CTAButtons />
		</div>
	)
}
