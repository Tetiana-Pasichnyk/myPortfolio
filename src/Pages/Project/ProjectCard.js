import React from 'react'
import style from './ProjectCard.module.css'

const ProjectCard = ({
	image,
	borderColor,
	link,
	githubLink,
	buttonColor,
	name,
	title,
	description,
	isPlaceholder = false,
}) => {
	return (
		<div
			className={`${style.card} ${isPlaceholder ? style.placeholder : ''}`}
			style={{ borderBottom: `3px solid ${borderColor}` }}
		>
			<div className={style.imageWrapper}>
				{isPlaceholder ? (
					<div className={style.placeholderImage}>
						<span>Coming soon</span>
					</div>
				) : (
					<img src={image} alt={`${name}: ${title}`} className={style.image} />
				)}
			</div>
			<div className={style.content}>
				<h3 className={style.name}>{name}</h3>
				<p className={style.tag}>{title}</p>
				<p className={style.description}>{description}</p>
				<div className={style.buttonGroup}>
					{isPlaceholder ? (
						<>
							<span className={style.disabledButton}>Go to Website</span>
							<span className={style.disabledButtonOutline}>GitHub</span>
						</>
					) : (
						<>
							<a
								className={style.linkButton}
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								style={{ backgroundColor: buttonColor }}
							>
								Go to Website
							</a>
							<a
								className={style.githubButton}
								href={githubLink}
								target='_blank'
								rel='noopener noreferrer'
								style={{ borderColor: buttonColor, color: buttonColor }}
							>
								GitHub
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
