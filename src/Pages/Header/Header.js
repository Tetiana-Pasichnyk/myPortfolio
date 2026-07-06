import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

const MyHeader = () => {
	const titleRef = useRef(null)

	useEffect(() => {
		const title = titleRef.current

		if (title) {
			const letters = Array.from(title.children)

			gsap.fromTo(
				letters,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: 'power.in',
				}
			)
		}
	}, [])

	return (
		<div className='header'>
			<div className='header-container'>
				<h1 className='header__title' ref={titleRef}>
					<span className='visually-hidden'>
						Hi, I'm Tetiana, web developer!
					</span>
					<span aria-hidden='true' className='letter margin'>
						H
					</span>
					<span aria-hidden='true' className='letter margin'>
						i
					</span>
					<span aria-hidden='true' className='letter margin'>
						,
					</span>
					<br />
					<span aria-hidden='true' className='letter margin'>
						I
					</span>
					<span aria-hidden='true' className='letter margin'>
						’
					</span>
					<span aria-hidden='true' className='letter m'>
						m
					</span>
					<span aria-hidden='true' className='letter margin'>
						T
					</span>
					<span aria-hidden='true' className='letter margin'>
						e
					</span>
					<span aria-hidden='true' className='letter margin'>
						t
					</span>
					<span aria-hidden='true' className='letter margin'>
						i
					</span>
					<span aria-hidden='true' className='letter margin'>
						a
					</span>
					<span aria-hidden='true' className='letter margin'>
						n
					</span>
					<span aria-hidden='true' className='letter margin'>
						a
					</span>
					<span aria-hidden='true' className='letter margin'>
						,
					</span>
					<br />
					<span aria-hidden='true' className='letter margin'>
						w
					</span>
					<span aria-hidden='true' className='letter margin'>
						e
					</span>
					<span aria-hidden='true' className='letter margin'>
						b &nbsp;
					</span>
					<span aria-hidden='true' className='letter margin'>
						d
					</span>
					<span aria-hidden='true' className='letter margin'>
						e
					</span>
					<span aria-hidden='true' className='letter margin'>
						v
					</span>
					<span aria-hidden='true' className='letter margin'>
						e
					</span>
					<span aria-hidden='true' className='letter margin'>
						l
					</span>
					<span aria-hidden='true' className='letter margin'>
						o
					</span>
					<span aria-hidden='true' className='letter margin'>
						p
					</span>
					<span aria-hidden='true' className='letter margin'>
						e
					</span>
					<span aria-hidden='true' className='letter margin'>
						r
					</span>
					<span aria-hidden='true' className='letter margin'>
						!
					</span>
				</h1>
				<div className='header-text'>
					<p>I am an expert in front-end development.</p>
					<p>I create easy-to-use websites with different functionality.</p>
					<p>
						I specialize in building applications specific to the business needs
						of my clients.
					</p>
				</div>
			</div>
		</div>
	)
}

export default MyHeader
