import style from './Skills.module.css'

const technologies = [
	{ src: './html.png', alt: 'HTML5' },
	{ src: './css.png', alt: 'CSS3' },
	{ src: './react.png', alt: 'React' },
	{ src: './node.png', alt: 'Node.js' },
	{ src: './redux.png', alt: 'Redux' },
	{ src: './bootstrap.png', alt: 'Bootstrap' },
	{ src: './figma.png', alt: 'Figma' },
	{ src: './github.png', alt: 'GitHub' },
]

const Program = () => {
	return (
		<div className={style.program}>
			<ul className={style.programList}>
				<li className={style.programItem}>
					<h3>Programming Languages:</h3>
					<p>JavaScript</p>
					<div className={style.iconGroup}>
						<img src='./javascript.png' alt='JavaScript' />
					</div>
				</li>
				<li className={style.programItem}>
					<h3>Web Technologies:</h3>
					<p>
						HTML5, CSS3, React.js, Node.js, Redux.js, Bootstrap-5, Figma, GitHub
					</p>
					<div className={style.iconGroup}>
						{technologies.map(({ src, alt }) => (
							<img key={alt} src={src} alt={alt} />
						))}
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Program
