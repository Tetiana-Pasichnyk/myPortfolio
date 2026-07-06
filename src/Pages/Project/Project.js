import React from 'react'
import ProjectContainer from './ProjectContainer'
import style from './Project.module.css'

function MyProject() {
	return (
		<div className={style.projectContainer}>
			<ProjectContainer />
		</div>
	)
}

export default MyProject
