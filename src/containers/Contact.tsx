import { useRef, FormEvent } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { SocialNetworks } from '../components/SocialNetworks'
import { useContact } from '../hooks/useContact'

const Contact = () => {
	const inputName = useRef(null)
	const inputEmail = useRef(null)
	const inputComment = useRef(null)

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		const data = {
			//@ts-ignore
			name: inputName.current?.value,
			//@ts-ignore
			email: inputEmail.current?.value,
			//@ts-ignore
			comment: inputComment.current?.value
		}

		useContact(data)

	}
	return (
		<div className="
						min-h-screen 
						w-full 
						flex 
						flex-col 
						items-center 
						md:pt-8
						
						">
			<h2 className="text-3xl mt-8 mb-4 drop-shadow-md">Contacto</h2>
			<SocialNetworks />
			<form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center h-96">
				<label htmlFor="name">
					<Input id='name'
						name='name'
						placeholder='nombre'
						type='text'
						ref={inputName} />
				</label>
				<label htmlFor="email">
					<Input id='email'
						name='email'
						placeholder='email'
						type='email'
						ref={inputEmail} />
				</label>
				<label htmlFor="comment">
					<textarea id="comment"
						required
						placeholder="comentario"
						className="border-main
									outline-none
									border-2
									p-2
									rounded-xl
									h-24
									w-64
									focus-visible:border-alert
									focus-visible:border-4
									shadow-lg
									md:mt-8
									md:w-80"
						name="comment"
						ref={inputComment} />
				</label>
				<Button text='Enviar' type='submit'/>
			</form>
		</div>
	)
}

export default Contact;