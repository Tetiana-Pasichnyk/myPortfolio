import { useForm, ValidationError } from '@formspree/react'
import style from './Form.module.css'
import foto from './../../Images/foto.png'
import iconCall from './../../Images/iconCall.png'
import iconEmail from './../../Images/iconEmail.png'

function ContactForm() {
	const [state, handleSubmit] = useForm('xnqylqya')

	return (
		<>
			<div className={style.header}>
				<h1>CONTACT ME</h1>
				<p>
					I'm a frontend developer ready to collaborate with you on web
					projects. Feel free to reach out—I'm here to bring your ideas to life
					and create seamless digital experiences!
				</p>
			</div>
			<div className={style.container}>
				<div className={style.profileInfo}>
					<img alt='ProfilePicture' width='150px' src={foto} />
					<div className={style.item}>
						<h3>Tetiana Pasichnyk</h3>
						<br />
						<p>
							<img alt='CallIcon' width='20px' src={iconCall} />
							Call +4917684180593
						</p>
						<p>
							<img alt='EmailIcon' width='20px' src={iconEmail} />
							<a href='mailto:pasichnyktetiana.de@gmail.com'>
								pasichnyktetiana.de@gmail.com
							</a>
						</p>
					</div>
				</div>
				<form
					className={style.form}
					onSubmit={(e) => {
						handleSubmit(e)
					}}
				>
					{!state.succeeded ? (
						<>
							<p className={style.formTitle}>SEND ME A MESSAGE!</p>
							<br />
							<label htmlFor='email'>Email Address</label>
							<input id='email' type='email' name='email' />
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
							<label htmlFor='message'>Your message</label>
							<textarea id='message' name='message' />
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
							<button
								className={style.button}
								type='submit'
								disabled={state.submitting}
							>
								Submit
							</button>
						</>
					) : (
						<p className={style.successMessage}>Form submitted successfully!</p>
					)}
				</form>
			</div>
		</>
	)
}

export default ContactForm
