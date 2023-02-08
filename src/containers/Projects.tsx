import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ProjectsItem } from "../components/ProjectsItem"

export const Projects = () => {
	const [stack, setStack] = useState('frontend')

	const handleStack = (stack: string) => {
		setStack(stack)
	}
	return (
		<div className="bg-white 
							min-h-screen 
							flex 
							flex-col 
							items-center ">
			<div className="mt-8">
				<Input id="projects"
					name="projects"
					placeholder="nombre del proyecto"
					type="text"
				/>
			</div>
			<div className="flex 
							justify-evenly 
							w-80
							mt-8">
				<Button type="text" handleStack={() => handleStack('frontend')} text="Frontend" />
				<Button type="text" handleStack={() => handleStack('backend')} text="Backend" />
				<Button type="text" handleStack={() => handleStack('fullstack')} text="Fullstack" />
			</div>
			<div>
				{stack === 'frontend' &&
					<>
						<ProjectsItem imgAlt="Mesa con laptop"
										imgUri="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
										name="Proyecto 1"
										techs={['js','ts','react']}/>
						
						<ProjectsItem imgAlt="Mesa con laptop"
										imgUri="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
										name="Proyecto 2"
										techs={['node','ts','express']}/>
						
						<ProjectsItem imgAlt="Mesa con laptop"
										imgUri="https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg"
										name="Proyecto 3"
										techs={['python','ts','react']}/>
						
					</>
				}
				{stack === 'backend' &&
					<h1>Aqui los proyectos backend</h1>
					
				}
				{stack === 'fullstack' &&
					<h1>Aqui los proyectos fullstack</h1>
				}
			</div>

		</div>
	)
}
