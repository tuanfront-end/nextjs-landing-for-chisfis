import React from 'react'
import archiveImg from '@/images/archive.png'
import authorImg from '@/images/author.png'
import searchImg from '@/images/search.png'
import submitPostImg from '@/images/submitPost.png'
import editAccountImg from '@/images/editAccount.png'
import single3Img from '@/images/single3.png'
import singleVideoImg from '@/images/singleVideo.png'
import singleAudioImg from '@/images/singleAudio.png'
import singleGalleryImg from '@/images/singleGallery.png'
import Badge from './Badge'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const SectionLayouts = () => {
	const data = [
		{
			img: archiveImg,
			text: 'Archive page',
			subText: 'Category page',
			link: 'https://ncmaz.chisnghiax.com/category/mobile/',
		},
		{
			img: authorImg,
			text: 'Author page',
			subText: 'Author page',
			link: 'https://ncmaz.chisnghiax.com/author/jaren-nader/',
		},
		{
			img: searchImg,
			text: 'Search page',
			subText: 'Search page',
			link: 'https://ncmaz.chisnghiax.com/?s=Minima',
		},
		{
			img: singleAudioImg,
			text: 'Single Audio',
			subText: 'Single format Audio',
			link: 'https://ncmaz.chisnghiax.com/velit-at-dolorem-dignissimos/',
		},
		{
			img: submitPostImg,
			text: 'Submission post page',
			subText: 'Need login - (guest/guest)',
			link: 'https://ncmaz.chisnghiax.com/ncmaz-submission-post-editor/?action=create',
			tag: 'HOT!',
		},
		{
			img: editAccountImg,
			text: 'Edit Account page',
			subText: 'Need login - (guest/guest)',
			link: 'https://ncmaz.chisnghiax.com/ncmaz-account/?tab=general',
			tag: 'HOT!',
		},
		{
			img: single3Img,
			text: 'Single style 3',
			subText: 'Single pages',
			link: 'https://ncmaz.chisnghiax.com/sint-est-autem-quibusdam-asperiores-occaecati-voluptatem/',
		},
		{
			img: singleVideoImg,
			text: 'Single Video',
			subText: 'Single format Video',
			link: 'https://ncmaz.chisnghiax.com/aspernatur-deserunt-repudiandae-provident-assumenda-odit-voluptas/',
		},

		{
			img: singleGalleryImg,
			text: 'Single Gallery',
			subText: 'Single format Gallery',
			link: 'https://ncmaz.chisnghiax.com/hello-world/',
		},
	]

	const renderItem = (item: (typeof data)[number], index: number) => {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={item.link}
				key={index}
				className="group flex transform flex-col transition-transform will-change-transform hover:-translate-y-1.5"
			>
				<div className="aspect-h-12 aspect-w-9 relative z-0 h-0 overflow-hidden rounded-xl shadow-xl">
					<Image
						fill
						className="absolute inset-0 block rounded-xl object-cover"
						src={item.img}
						alt={item.text}
					/>
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900 bg-opacity-0 transition-all duration-200 group-hover:bg-opacity-10">
						<div
							className="flex h-14 w-14 transform items-center justify-center rounded-full bg-slate-900/70 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							title="View page"
						>
							<ArrowRightIcon className="h-6 w-6 -rotate-45 transform" />
						</div>
					</div>
				</div>
				<div className="relative mt-1 p-3 text-center">
					<div className="inline-flex items-center space-x-2">
						<span className="block text-base font-medium capitalize text-slate-900">
							{item.text}
						</span>
						{item.tag && <Badge name={item.tag} color="bg-red-700" />}
					</div>
					{item.subText && (
						<span className="block text-xs text-slate-600">{item.subText}</span>
					)}
				</div>
			</a>
		)
	}

	return (
		<section className="mt-6">
			<h2 className="text-center text-4xl font-bold tracking-tight lg:text-5xl">
				Template layouts 🧬
			</h2>
			<p className="mx-auto mt-4 text-center text-lg text-gray-600">
				Please login with demo account{' '}
				<i className="text-orange-700">
					<u>(guest/guest)</u>
				</i>{' '}
				to access all the amazing pages of the theme.
			</p>
			<div className="mt-4 flex items-center justify-center">
				<Badge
					name="username: guest ---- password: guest"
					className="!px-5 !py-2 !text-sm"
					color="bg-sky-700"
				>
					Username: guest{' '}
					<span className="mx-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
						</svg>
					</span>{' '}
					Password: guest
				</Badge>
			</div>
			<div className="mt-12 grid gap-x-7 gap-y-11 md:grid-cols-2 xl:grid-cols-4">
				{data.map(renderItem)}
				<div className="aspect-h-12 aspect-w-9 h-0 rounded-xl bg-slate-100 bg-opacity-60 shadow-2xl">
					<div className="absolute inset-0 flex items-center justify-center">
						<h3 className="text-2xl uppercase tracking-widest">MORE ++</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
