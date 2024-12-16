import './globals.css'

export const metadata = {
	title: 'Chisfis - Online booking Nextjs template',
	description:
		'Chisfis is a Next.js 14, typescript and tailwindcss template, a perfect starting point for your next Booking online and Real Estate site. Stay, Hotel, Car, Experiences, Real Estate, Flight, Property, Travel, Tour...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
