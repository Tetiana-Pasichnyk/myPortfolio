import React from 'react'
import style from './ProjectCard.module.css'

const ProjectCard = ({ image, borderColor, id, link, buttonColor, title }) => {
	return (
		<div
			className={style.card}
			style={{
				borderBottom: `3px solid ${borderColor}`,
				padding: '10px',
				margin: '10px',
				maxWidth: '300px',
			}}
		>
			<div
				style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}
			>
				<img
					src={image}
					alt={`Project ${id + 1}: ${title}`}
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</div>
			<br />
			<div>
				<p>{title}</p>
			</div>
			<div>
				<a
					className={style.linkButton}
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					style={{ backgroundColor: buttonColor }}
				>
					Go to Website
				</a>
			</div>
		</div>
	)
}

export default ProjectCard
