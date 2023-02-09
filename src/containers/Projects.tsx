import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ProjectsItem } from "../components/ProjectsItem"
import { useProjects } from "../hooks/useProjects"

export const Projects = () => {
	const [stack, setStack] = useState('frontend')
	const {frontend,backend,fullstack} = useProjects()

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
				<Button type="text" handleStack={() => handleStack('frontend')} text="Frontend" 
						customClass={stack === 'frontend' ? true : false}/>
						
				<Button type="text" handleStack={() => handleStack('backend')} text="Backend" 
						customClass={stack === 'backend' ?  true: false}/>
			
				<Button type="text" handleStack={() => handleStack('fullstack')} text="Fullstack" 
						customClass={stack === 'fullstack'? true : false}/>
						
			</div>
			<div>
				{stack === 'frontend' &&
					frontend.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										key={item.name}/>
					))
				}
				{stack === 'backend' &&
					backend.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										key={item.name}/>
					))
				}
				{stack === 'fullstack' &&
					fullstack.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										key={item.name}/>
					))
				}
			</div>

		</div>
	)
}
