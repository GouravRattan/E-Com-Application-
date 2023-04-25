import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//import component 
import Username from './components/Username';
import Register from './components/Register';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound'
 
//  Root Router

const router = createBrowserRouter([
    {
        path : '/',
        element : <Username> </Username>
    },
    {
        path : '/register',
        element : <Register> </Register>
    },
    {
        path : '/Reset',
        element : <Reset> </Reset>
    },
    {
        path : '/Recovery',
        element : <Recovery> </Recovery>
    },
    {
        path : '/Profile',
        element : <Profile> </Profile>
    },
    {
        path : '/Password',
        element : <Password> </Password>
    },
    {
        path : '/PageNotFound',
        element : <PageNotFound> </PageNotFound>
    },
     
])


export default function App() {
  return ( 
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
