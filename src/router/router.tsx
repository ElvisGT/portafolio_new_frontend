import { lazy, Suspense } from 'react'
import {createHashRouter} from 'react-router-dom'
import App from '../App'
import { Loading } from '../components/Loading';
import Home from '../containers/Home';
import {Login} from '../admin/containers/Login';
import { Add } from '../admin/containers/Add';
const About = lazy(() => import('../containers/About'))
const Contact = lazy(() => import('../containers/Contact'))
const Projects = lazy(() => import('../containers/Projects'))
const Skills = lazy(() => import('../containers/Skills'))


export const router = createHashRouter([
    {
        path:'/',
        element:<App />,
        children: [
            {
              index:true,
              element:<Home />
            },
            {
              path: "/about",
              element:<Suspense fallback={<Loading />}>
                        <About />
                      </Suspense>
            },
            {
                path: "/skills",
                element:<Suspense fallback={<Loading />}>
                          <Skills />
                        </Suspense>
              },
              {
                path: "/projects",
                element:<Suspense fallback={<Loading />}>
                          <Projects />
                        </Suspense>
              },
              {
                path: "/contact",
                element:<Suspense fallback={<Loading />}>
                          <Contact />
                        </Suspense>
              }
          ],
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/add',
      element:<Add />
    }
    
])