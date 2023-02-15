import { Outlet } from 'react-router-dom'


export const OutletContainer = () => {
	return (
			<div className='z-10 w-full 
							md:w-[calc(100%_-_20rem)] 
							mt-16 
							md:mt-0 
							md:absolute 
							md:right-0
							'>
				<Outlet />
			</div>
	)
}
