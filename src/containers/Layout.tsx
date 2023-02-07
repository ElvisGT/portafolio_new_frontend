import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="w-full h-screen bg-red-500">
        	<Outlet />
    </div>

  )
}
