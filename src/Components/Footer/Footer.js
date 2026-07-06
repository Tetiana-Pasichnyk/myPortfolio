import React from 'react'
import './Footer.css'

const MyFooter = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<div className='copyright'>
						<p>© {currentYear} Tetiana Pasichnyk</p>
					</div>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://github.com/Tanyaru7'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub profile'
							>
								<img src='./github.png' alt='' />
							</a>
							<a
								href='https://www.linkedin.com/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn profile'
							>
								<img src='./linkedin.png' alt='' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default MyFooter
