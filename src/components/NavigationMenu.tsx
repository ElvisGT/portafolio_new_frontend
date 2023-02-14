import { NavLink } from "react-router-dom"
import { navigationMenuType } from "../types/"

const navigation: navigationMenuType[] = [
	{
		link: '/',
		description: 'Inicio'
	},
	{
		link: '/about',
		description: 'Acerca'
	},
	{
		link: '/skills',
		description: 'Habilidades'
	},
	{
		link: '/projects',
		description: 'Proyectos'
	},
	{
		link: '/contact',
		description: 'Contacto'
	},
]


export const NavigationMenu = () => {

	const handleUp = () => {
		window.scroll(0,0);
	}
	return (
		<div className="w-screen 
                    h-16
                    z-30 
					fixed
					top-0
					flex
					bg-main
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
					"
						key={item.link}
						onClick={handleUp}
					>
						<NavLink to={item.link}
							className={({ isActive }) =>
								isActive
									? "text-alert"
									: ""
							}
						>
							{item.description}
						</NavLink>
					</li>
				)
				)}
			</ul>
		</div>
	)
}
