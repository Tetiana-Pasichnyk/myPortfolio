import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { data } from './DiplomData'
import style from './Diplom.module.css'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

const Diplom = () => {
	const [item, setItem] = useState(0)
	const imageRef = useRef(null)
	const { id, image } = data[item]

	const nextImage = () => {
		setItem((current) => (current + 1) % data.length)
	}

	const previousImage = () => {
		setItem((current) => (current - 1 + data.length) % data.length)
	}

	useEffect(() => {
		const imageElement = imageRef.current

		if (!imageElement) return undefined

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		if (prefersReducedMotion) {
			gsap.set(imageElement, { opacity: 1 })
			return undefined
		}

		const animation = gsap.fromTo(
			imageElement,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.4, ease: 'power2.out' }
		)

		return () => {
			animation.kill()
		}
	}, [item])

	return (
		<div className={style.container}>
			<img
				ref={imageRef}
				src={image}
				height='400'
				alt={`Diploma ${id}`}
				className={style.image}
			/>
			<button
				type='button'
				className={style.btnPrev}
				onClick={previousImage}
				aria-label='Previous diploma'
			>
				<GrCaretPrevious aria-hidden='true' />
			</button>
			<button
				type='button'
				className={style.btnNext}
				onClick={nextImage}
				aria-label='Next diploma'
			>
				<GrCaretNext aria-hidden='true' />
			</button>
		</div>
	)
}

export default Diplom
