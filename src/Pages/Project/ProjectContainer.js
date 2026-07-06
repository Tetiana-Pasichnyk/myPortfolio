import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './ProjectData'
import style from './ProjectContainer.module.css'

function ProjectContainer() {
	return (
		<div className={style.container}>
			{projects.map((project, id) => (
				<div key={id}>
					<ProjectCard
						image={project.image}
						borderColor={project.borderColor}
						link={project.link}
						githubLink={project.githubLink}
						buttonColor={project.buttonColor}
						name={project.name}
						title={project.title}
						description={project.description}
						isPlaceholder={project.isPlaceholder}
					/>
				</div>
			))}
		</div>
	)
}

export default ProjectContainer
