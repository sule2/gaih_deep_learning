import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { Contact, Home } from './AppRouter';
import About from '../About';
import Companies from '../company/MyCompany';

function NewRouter() {
  return (
    <BrowserRouter>
    <div className='bar-container' >
          <Link className='bar-item' to="">HOME</Link>
          <Link className='bar-item' to="about/" >ABOUT</Link>
          <Link className='bar-item' to="contact/" >CONTACT</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* v5 react-router-dom needs exact for '/' symbol */}
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="companies/*" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default NewRouter