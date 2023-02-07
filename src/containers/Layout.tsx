import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
			<div className='z-10 top-16 absolute w-full'>
				<Outlet />
			</div>
	)
}
