import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

const TITLE_LINES = ['Hi,', "I'm Tetiana,", 'web developer!']

const INTRO_PARAGRAPHS = [
	'I am an expert in front-end development.',
	'I create easy-to-use websites with different functionality.',
	'I specialize in building applications specific to the business needs of my clients.',
]

const MyHeader = () => {
	const titleRef = useRef(null)
	const textRef = useRef(null)

	useEffect(() => {
		const letters = titleRef.current?.querySelectorAll('[data-letter]')
		const paragraphs = textRef.current?.querySelectorAll('p')

		if (!letters?.length) return undefined

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		if (prefersReducedMotion) {
			gsap.set([...letters, ...(paragraphs || [])], { opacity: 1, y: 0 })
			return undefined
		}

		const timeline = gsap.timeline()

		timeline.fromTo(
			letters,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.04,
				ease: 'power2.out',
			}
		)

		if (paragraphs?.length) {
			timeline.fromTo(
				paragraphs,
				{ opacity: 0, y: 12 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.12,
					ease: 'power2.out',
				},
				'-=0.15'
			)
		}

		return () => {
			timeline.kill()
		}
	}, [])

	return (
		<div className='header'>
			<div className='header-container'>
				<h1 className='header__title' ref={titleRef}>
					<span className='visually-hidden'>
						Hi, I'm Tetiana, web developer!
					</span>
					{TITLE_LINES.map((line, lineIndex) => (
						<React.Fragment key={line}>
							<span className='title-line' aria-hidden='true'>
								{line.split('').map((char, charIndex) => (
									<span
										key={`${lineIndex}-${charIndex}`}
										className='letter'
										data-letter
									>
										{char === ' ' ? '\u00a0' : char}
									</span>
								))}
							</span>
							{lineIndex < TITLE_LINES.length - 1 && <br aria-hidden='true' />}
						</React.Fragment>
					))}
				</h1>
				<div className='header-text' ref={textRef}>
					{INTRO_PARAGRAPHS.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default MyHeader
