import {createHashRouter} from 'react-router-dom'
import App from '../App'
import { About,Contact,Projects,Skills } from '../containers/'

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
                path: "/skills",
                element:<Skills />,
              },
              {
                path: "/projects",
                element:<Projects />,
              },
              {
                path: "/contact",
                element:<Contact />,
              },
          ],
    },
    
])