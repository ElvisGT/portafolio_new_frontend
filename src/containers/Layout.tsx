import { Outlet } from 'react-router-dom'
import { NavigationMenu } from '../components/NavigationMenu'

export const Layout = () => {
	return (
			<div className='z-10 w-full mt-16 md:top-0 md:flex md:justify'>
				<NavigationMenu/>
				<Outlet />
			</div>
	)
}
