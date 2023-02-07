import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div className="
					w-full
					z-0 
					overflow-hidden
					absolute
					top-16
					" >
			<div className='bg-black opacity-80 z-0'>
				<h1 className='text-6xl
							text-white 
							mt-8
							px-3
							py-8
							drop-shadow-2xl
							z-10
							'>
					Bienvenido a mi <span className='italic font-bold'>Portafolio</span>
				</h1>
			</div>

			<div className='z-10 top-0 absolute w-full'>
				<Outlet />
			</div>
		</div>

	)
}
