import {createHashRouter} from 'react-router-dom'
import App from '../App'

export const router = createHashRouter([
    {
        path:'/',
        element:<App />,
        children: [
            {
              path: "/menu",
              element:<h1 className='bg-yellow-300 h-screen'>Menu</h1>,
            },
            {
                path: "/menu2",
                element:<h1 className='bg-green-700 h-screen'>Menu2</h1>,
              },
              {
                path: "/menu3",
                element:<h1 className='bg-blue-700 h-screen'>Menu3</h1>,
              },
              {
                path: "/menu4",
                element:<h1 className='bg-violet-700 h-screen'>Menu3</h1>,
              },
          ],
    },
    
])