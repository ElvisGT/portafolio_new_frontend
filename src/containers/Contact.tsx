import {useRef, FormEvent} from 'react'
import {useContact} from '../hooks/useContact'

export const Contact = () => {
	const inputName = useRef(null)
	const inputEmail = useRef(null)
	const inputComment = useRef(null)
	
	const handleSubmit = (event:FormEvent) => {
		event.preventDefault()
		const data = {
			//@ts-ignore
			name:inputName.current?.value,
			//@ts-ignore
			email:inputEmail.current?.value,
			//@ts-ignore
			comment:inputComment.current?.value
		}

		useContact(data)
		
	}
	return (
		<div className="bg-white 
						h-screen 
						w-full 
						flex 
						flex-col 
						items-center 
						fixed">
			<h2 className="text-3xl mt-8 mb-4 ">Contacto</h2>
			<form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center h-96">
				<label htmlFor="name">
					<input id="name"
						type="text"
						required
						placeholder="nombre"
						className="border-main
									outline-none
									border-2
									p-2
									rounded-xl
									w-64
									h-12
									focus-visible:border-alert
									focus-visible:border-4
									shadow-lg"
						name='name'
						ref={inputName}/>
				</label>
				<label htmlFor="email">
					<input id="email"
						type="email"
						required
						placeholder="email"
						className="border-main
									outline-none
									border-2
									p-2
									rounded-xl
									w-64
									h-12
									focus-visible:border-alert
									focus-visible:border-4
									shadow-lg"
						name="email"
						ref={inputEmail}/>
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
									shadow-lg"
						name="comment"
						ref={inputComment}/>
				</label>
				<input type="submit"
					value="Enviar"
					className="bg-main
									w-20
									h-8
									text-white
									rounded-xl
								  hover:bg-alert
								  "/>
			</form>
		</div>
	)
}
