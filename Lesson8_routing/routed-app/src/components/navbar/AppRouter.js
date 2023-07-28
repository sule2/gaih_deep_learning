import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import Companies from '../company/MyCompany';
import MySponsor from '../sponsor/MySponsor';
import About from '../About';

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          Welcome Stranger :)
        </div>
      ),
    },
    {
      path: "home",
      element: <Home/>,
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
        path: "companies",
        element: <Companies/>,
      },
    {
      path: "/login",
      element: <div style={{backgroundColor:"cornsilk"}}> Login</div>,
    },
  ]);


export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}

//export default AppRouter

export function Home(){
    return(
        <div style={{padding:"2rem",textAlign:"center",fontSize:"25pt"}}>Home <br/> <hr/>
        </div>
    )
};


export function Contact(){
    return(
      <div style={{padding:"2rem",textAlign:"center",fontSize:"25pt"}}>Contact <br/> <hr/>
      </div>
    )
};