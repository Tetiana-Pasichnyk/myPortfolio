import Diplom from './Diplom'
import Program from './Program'
import style from './Skills.module.css'

const Skills = () => {
	return (
		<section className={style.skillsSection}>
			<div className={style.header}>
				<h2>Skills</h2>
			</div>
			<div className={style.container}>
				<Diplom />
				<Program />
			</div>
		</section>
	)
}

export default Skills
