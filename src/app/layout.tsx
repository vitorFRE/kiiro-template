import type { Metadata } from 'next'

import '../styles/globals.css'

import { TailwindIndicator } from '@/components/tailwind-indicator'
import { siteConfig } from '@/config/site'
import { lexend } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`
	},
	description: siteConfig.description
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={cn('font-sans', lexend.variable)}>
				{children}
				<TailwindIndicator />
			</body>
		</html>
	)
}
