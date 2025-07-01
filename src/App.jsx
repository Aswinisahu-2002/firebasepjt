import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
import ShowUser from './pages/ShowUser'

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
        },
        {
            path:"/creteuser",
            element:<CreateUser/>
        },
        {
            path:"/updateuser/:id",
            element:<UpdateUser/>
        },
        {
            path:"/showuser",
            element:<ShowUser/>
        }
    ])
  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default App