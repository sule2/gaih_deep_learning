import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { Contact, Home } from './AppRouter';
import About from '../About';
import Companies from '../company/MyCompany';
import styles from './styles.module.css';
import NotFound from '../NotFound';

function NewRouter() {
  return (
    <BrowserRouter>
    <div className={styles.barContainer} >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? styles.pending : isActive ? styles.active  : styles.barItem
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="about/"
        className={({ isActive, isPending }) =>
          isPending ? styles.pending : isActive ? styles.active : styles.barItem
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="contact/"
        className={({ isActive, isPending }) =>
          isPending ? styles.pending : isActive ? styles.active : styles.barItem
        }
      >
        CONTACT
      </NavLink>
          {/* <Link className={styles.barItem} to="">HOME</Link>
          <Link className={styles.barItem} to="about/" >ABOUT</Link>
          <Link className={styles.barItem} to="contact/" >CONTACT</Link> */}
    </div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* v5 react-router-dom needs exact for '/' symbol */}
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="companies/*" element={<Companies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default NewRouter