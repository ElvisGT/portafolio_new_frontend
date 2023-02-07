import React from 'react'
import ReactDOM from 'react-dom/client'
import './static/css/index.css'
import  App  from './App'
import {RouterProvider} from 'react-router-dom'
import { router } from './router/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
