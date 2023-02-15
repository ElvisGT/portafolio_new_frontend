import { useState,useRef } from "react"
import { Button } from "../components/Button"
import { ButtonUp } from "../components/ButtonUp"
import { Input } from "../components/Input"
import { ProjectsItem } from "../components/ProjectsItem"
import { useProjects } from "../hooks/useProjects"
import { projectProps } from "../types"

const Projects = () => {
	const [stack, setStack] = useState('all')
	const inputRef = useRef(null) 
	const {frontend,backend,fullstack,allProjects} = useProjects()
	const [finded,setFinded] = useState(Array<projectProps>)

	const handleSearch = () => {
		//@ts-ignore
		const userSearch:string = inputRef.current?.value
		const projectsFinded = allProjects.filter((item) => {
			return item.name.toLowerCase().includes(userSearch.toLowerCase())
		})

		if(projectsFinded.length === 1){
			setFinded(projectsFinded)
			projectsFinded.forEach(project => {
				setStack(project.stack)
			})
		}else {
			setFinded([])
			setStack('all')
		}
	}	

	

	const handleStack = (stack: string) => {
		setStack(stack)

	}
	return (
		<div id="projects" className="
							min-h-screen 
							flex 
							flex-col 
							items-center
							md:w-10/12
                 			md:m-auto ">
			<div className="mt-8">
				<Input ref={inputRef}
						name="projects"
						id="projects"
						placeholder="nombre del proyecto"
						type="text"
						handleSearch={handleSearch}/>
			</div>
			<div className="flex 
							justify-evenly 
							flex-wrap
							min-w-80
							my-8">
				<Button type="text" handleStack={() => handleStack('all')} text="Todos" 
						customClass={stack === 'all'? true : false}/>

				<Button type="text" handleStack={() => handleStack('frontend')} text="Frontend" 
						customClass={stack === 'frontend' ? true : false}/>
						
				<Button type="text" handleStack={() => handleStack('backend')} text="Backend" 
						customClass={stack === 'backend' ?  true: false}/>
			
				<Button type="text" handleStack={() => handleStack('fullstack')} text="Fullstack" 
						customClass={stack === 'fullstack'? true : false}/>
				
						
			</div>
			<div className="md:flex md:flex-wrap md:justify-evenly md:w-full">
				{finded.length > 0 &&
					finded.map((item) => (
					<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										stack={item.stack}
										key={item.name}/>
				))}
				{(stack === 'all' && finded.length === 0) &&
					allProjects.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										stack={item.stack}
										key={item.name}/>
					))
				}
				{(stack === 'frontend' && finded.length === 0) &&
					frontend.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										stack={item.stack}
										key={item.name}/>
					))
				}
				{(stack === 'backend' && finded.length === 0) &&
					backend.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										stack={item.stack}
										key={item.name}/>
					))
				}
				{(stack === 'fullstack' && finded.length === 0) &&
					fullstack.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										stack={item.stack}
										key={item.name}/>
					))
				}
				

			</div>
			<ButtonUp />
		</div>
	)
}


export default Projects;