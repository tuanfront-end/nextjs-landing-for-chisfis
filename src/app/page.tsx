import { Nav } from '@/components/Nav'
import Section1 from '@/components/Section1'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import { SectionDemos } from '@/components/SectionDemos'
import Example from '@/components/SectionX'
import Example2 from '@/components/SectionX2'
import { Inter } from 'next/font/google'

const poppins = Inter({
	subsets: ['latin'],
})

declare global {
	var MORE_DEMOS: {
		img: string
		text: string
		subText: string
		link: string
		tags?: string[]
	}[]
}

export default function Home() {
	return (
		<main className={poppins.className}>
			<Nav />

			<div className="py-24 sm:py-32 xl:py-40">
				<Section1 />
			</div>

			<div id="demo" className="dark bg-gray-800 py-24 text-slate-200 sm:py-32">
				<SectionDemos />
			</div>

			<div className="container">
				<Example />
				<hr className="border-slate-200" />
				<Example2 />
				<hr className="border-slate-200" />
				<Section5 />
				<hr className="border-slate-200" />
				<Section6 />
			</div>
		</main>
	)
}
