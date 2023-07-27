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
        <div>Home <br/> <hr/>
            <nav style={{lineHeight:"3rem", textAlign:"center"}}>
                <Link style={{borderStyle:"groove",borderColor:"crimson",borderWidth:"1px",borderRadius:"30%",textDecoration:"none",padding:"1rem"}} to="companies">Company Info</Link>
            </nav>
        </div>
    )
};


export function Contact(){
    return(
        <div>Contact</div>
    )
};