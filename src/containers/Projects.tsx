import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ProjectsItem } from "../components/ProjectsItem"

export const Projects = () => {
	const [stack, setStack] = useState('frontend')

	//informacion de prueba
	const data = [
		{
			imgAlt:"Mesa con laptop",
			imgUri:"https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
			name:"Proyecto 1",
			techs:['js','ts','react']
		},
		{
			imgAlt:"Mesa con laptop",
			imgUri:"https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
			name:"Proyecto 2",
			techs:['python']
		},
		{
			imgAlt:"Mesa con laptop",
			imgUri:"https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
			name:"Proyecto 3",
			techs:['js','html','css']
		},
		{
			imgAlt:"Mesa con laptop",
			imgUri:"https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
			name:"Proyecto 4",
			techs:['js','ts','react','mongodb','node','express','mysql','docker','python']
		},
	]

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
					data.map(item => (
						<ProjectsItem imgAlt={item.imgAlt}
										imgUri={item.imgUri}
										name={item.name}
										techs={item.techs}
										key={item.name}/>
					))
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
