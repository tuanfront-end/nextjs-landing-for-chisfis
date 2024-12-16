import React from 'react'
import Heading from './Heading'
import {
	CpuChipIcon as ChipIcon,
	CubeIcon,
	MoonIcon,
	CodeBracketIcon as CodeIcon,
	LifebuoyIcon as SupportIcon,
	CircleStackIcon as DatabaseIcon,
	HomeIcon,
	MapPinIcon as LocationMarkerIcon,
	Square2StackIcon as ViewGridAddIcon,
} from '@heroicons/react/24/solid'
import Badge from './Badge'

const data = [
	{
		title:
			process.env.NEXT_PUBLIC_FRAMEWORK === 'next'
				? 'Next.js 13 Template'
				: 'React Template',
		desc:
			process.env.NEXT_PUBLIC_FRAMEWORK === 'next'
				? 'Built with Next 13, Typescript, and the latest Tailwindcss'
				: 'Built with React 18, Typescript, and the latest Tailwindcss, ',
		icon: ChipIcon,
		isDifference: true,
	},
	{
		title: '100% responsive',
		desc: 'Works on all devices and touch sensors. High quality images, fonts & text.',
		icon: CubeIcon,
	},

	{
		title: 'Data & Logic',
		desc: 'Almost actions are fully logic processed (map, date range, popup...)',
		icon: DatabaseIcon,
	},
	{
		title: 'Dark mode',
		desc: 'Darkmode modern. Helps you quickly turn the theme mode to dark at night time.',
		icon: MoonIcon,
	},
	{
		title: 'Customizing the theme',
		desc: 'Completely customize the template and whole Taiwindcss, quickly modifying its config variables.',
		icon: CodeIcon,
	},
	{
		title: 'Free updates and support',
		desc: 'I work closely with my customers to provide a high standard of  support and quick bug fixes.',
		icon: SupportIcon,
	},
	{
		title: 'Stays listing',
		desc: '...',
		icon: HomeIcon,
	},
	{
		title: 'Car rental listing',
		desc: '...',
		icon: ViewGridAddIcon,
	},
	{
		title: 'Experiences listing ',
		desc: '...',
		icon: LocationMarkerIcon,
	},
	{
		title: 'Flight listing',
		desc: '...',
		icon: ViewGridAddIcon,
		isNew: true,
	},
	{
		title: 'Real estate listing',
		desc: '...',
		icon: ViewGridAddIcon,
		isNew: true,
	},
]

const Section2 = () => {
	return (
		<section id="features" className="mx-auto max-w-6xl py-20 text-center">
			<Heading className="text-center">Salient features 🎲</Heading>
			<p className="mx-auto mt-3 block max-w-4xl text-center text-lg text-slate-400">
				Check out the outstanding features below and above all, see the headset,
				check out our demo to experience
			</p>

			<div className="mt-10 grid grid-cols-4 gap-8 sm:grid-cols-8 sm:px-8 lg:grid-cols-12 xl:px-0">
				{data.map((item, index) => (
					<div
						key={index}
						className="relative col-span-4 flex flex-col items-center space-y-4 rounded-3xl border border-slate-700 bg-slate-800 bg-opacity-30 px-8 py-12"
					>
						{(item.isNew || item.isDifference) && (
							<div className="absolute left-2.5 top-2 flex space-x-2">
								{item.isNew && <Badge name="New!" color="bg-orange-700" />}
								{item.isDifference && (
									<Badge name="We are unique!" color="bg-pink-700" />
								)}
							</div>
						)}
						<div className="rounded-full bg-blue-700 p-3 text-slate-100">
							<item.icon className="h-6 w-6" />
						</div>
						<h4 className="text-xl font-medium text-slate-200">{item.title}</h4>
						<p className="text-center text-base text-slate-400">{item.desc}</p>
					</div>
				))}
				<div className="relative col-span-4 flex flex-col items-center space-y-4 rounded-3xl border border-slate-700 bg-slate-800 bg-opacity-30 px-8 py-12">
					<div className="absolute inset-0 flex items-center justify-center">
						<h3 className="text-2xl uppercase tracking-widest">MORE ++</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section2
