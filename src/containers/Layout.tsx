import {Outlet} from 'react-router-dom'

export const Layout = () => {
	return (
		<div className="
					w-full 
					h-screen 
					z-0 
					overflow-x-hidden" >
			<h1 className='text-9xl text-amber-700'>Bienvenido</h1>	
			<div className='z-10 top-0 absolute w-full'>
				<Outlet/>
			</div>
		</div>

	)
}
