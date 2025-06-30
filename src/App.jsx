import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Dashboard/>
        },
        {
            path:"/signin",
            element:<Signin/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:"/home",
            element:<Home/>
        }
    ])
  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default App