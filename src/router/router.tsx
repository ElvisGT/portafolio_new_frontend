import {createHashRouter} from 'react-router-dom'
import App from '../App'
import { About } from '../components/About'

export const router = createHashRouter([
    {
        path:'/',
        element:<App />,
        children: [
            {
              path: "/about",
              element:<About />,
            },
            {
                path: "/skill",
                element:<h1 className='h-screen z-10'>Skill</h1>,
              },
              {
                path: "/projects",
                element:<h1 className='bg-blue-700 h-screen'>Projects</h1>,
              },
              {
                path: "/contact",
                element:<h1 className='bg-violet-700 h-screen'>Contact</h1>,
              },
          ],
    },
    
])