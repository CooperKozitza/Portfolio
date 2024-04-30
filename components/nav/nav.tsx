'use client';

import { useState } from "react";
import { FaBars } from "react-icons/fa"

import styles from "./nav.module.css"

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <h1 className={`${styles.logo} ${styles.navbarLinks}`}><a href="/">CK</a></h1>
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
            <li><a href="/#about" className={styles.navbarLink}>About</a></li>
            <li className="text-gray-400"><a className={styles.navbarLink}>Projects</a></li>
            <li className="text-gray-400"><a className={styles.navbarLink}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
