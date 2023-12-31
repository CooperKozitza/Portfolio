'use client';

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"

import styles from "./nav.module.css"

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 10);
    } 

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <div className={`${styles.navbar} ${navbarBg ? 'bg-white dark:bg-neutral-800 shadow-xl' : ''}`}>
        <h1 className="p-2">CK</h1>
        <button
          className={styles.navbarToggle}
          aria-controls="nav-menu"
          aria-hidden="false"
          onClick={() => setMenuExpanded(!menuExpanded)}>
          <span className="sr-only">Expand Menu</span>
          <FaBars />
        </button>
        <div className={`${menuExpanded ? styles.show : styles.hide} w-full sm:block sm:w-fit`} id="nav-menu">
          <ul className={styles.navbarLinks}>
            <li><a href="#" className="block py-2 px-4">About</a></li>
            <li><a href="#" className="block opacity-50 py-2 px-4">Projects</a></li>
            <li><a href="#" className="block py-2 px-4">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
