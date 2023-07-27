import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { Contact, Home } from './AppRouter';
import About from '../About';

function NewRouter() {
  return (
    <BrowserRouter>
    <div className='bar-container' >
          <Link className='bar-item' to="">HOME</Link>
          <Link className='bar-item' to="about/*" >ABOUT</Link>
          <Link className='bar-item' to="contact/*" >CONTACT</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default NewRouter