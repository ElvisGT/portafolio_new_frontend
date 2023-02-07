import { Link } from "react-router-dom"
import { navigationMenu } from "../types/navigationMenu"

const navigation: navigationMenu[] = [
	{
		link:'/',
		description:'Inicio'
	},
	{
		link:'/about',
		description:'Acerca'
	},
	{
		link:'/skill',
		description:'Habilidades'
	},
	{
		link:'/projects',
		description:'Proyectos'
	},
	{
		link:'/contact',
		description:'Contacto'
	},
]


export const NavigationMenu = () => {
  return (
    <div className="w-screen 
                    h-16
                    z-10 
					fixed
					top-0
					flex
					bg-main
					opacity-80
                    md:border-r-2
                    md:w-96
                    md:h-screen">
      <ul className="
	  		w-full
	  		flex 
			items-center 
			justify-between
			overflow-x-scroll
			flex-nowrap">
       
		{navigation.map((item) => (
			<li className="
					w-20
					ml-4
					mr-6 
					text-white
					" key={item.link}>
				<Link to={item.link}>{item.description}</Link>
			</li>
		)
	   	)}
      </ul>
    </div>
  )
}
