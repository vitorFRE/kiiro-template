'use client'

import Link from 'next/link'

import { Icons } from '@/components/icons'
import { LampContainer } from '@/components/lamp'

import { Button } from '../ui/button'

export default function Welcome() {
	return (
		<section className="bg-background">
			<LampContainer>
				<h1 className="text-7xl font-extrabold tracking-widest text-white sm:text-9xl">
					KIIRO
				</h1>
				<div className="absolute top-14 rotate-12 rounded bg-yellow-500 px-2 text-sm text-background">
					Template
				</div>

				<Link
					className="mt-6 sm:mt-0"
					target="_blank"
					href={'https://github.com/vitorFRE/kiiro-template'}
				>
					<Button className="font-interFont inline-flex items-center gap-4 rounded bg-yellow-400 px-4 py-2 font-bold text-black hover:bg-yellow-400/70">
						<Icons.github />
						<span>Github</span>
					</Button>
				</Link>
			</LampContainer>
		</section>
	)
}
