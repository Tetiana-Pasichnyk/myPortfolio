import MyHeader from '../Header/Header'
import Skills from '../Skills/Skills'
import style from './Home.module.css'

const MyHome = () => {
	return (
		<div className={style.home}>
			<MyHeader />
			<Skills />
		</div>
	)
}

export default MyHome
