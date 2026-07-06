import { useState } from 'react'
import { data } from './DiplomData'
import style from './Diplom.module.css'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

const Diplom = () => {
	const [item, setItem] = useState(0)
	const { id, image } = data[item]

	const nextImage = () => {
		setItem((current) => (current + 1) % data.length)
	}

	const previousImage = () => {
		setItem((current) => (current - 1 + data.length) % data.length)
	}

	return (
		<div className={style.container}>
			<img src={image} height='400px' alt={`Diploma ${id}`} />
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
