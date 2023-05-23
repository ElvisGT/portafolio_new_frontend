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
					top-0
					flex
					bg-main
					fixed
                    md:w-80
                    md:h-screen
					">
			<ul className="
				w-full
				flex 
				items-center 
				justify-between
				overflow-x-scroll
				flex-nowrap
				opacity:100
				md:flex-col
				md:w-80
				md:justify-evenly
				md:overflow-x-hidden">

				{navigation.map((item) => (
					<li className="
					w-20
					ml-4
					mr-6 
					text-white
					md:text-xl
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
