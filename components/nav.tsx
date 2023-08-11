'use client';

import { useState } from "react";
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0">
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-between p-4 mx-auto font-display">
        <h1 className="font-black p-2">CK</h1>
        <button
          className="block sm:hidden p-2 border border-transparent hover:border-gray-200 rounded"
          aria-controls="nav-menu"
          aria-hidden="false"
          onClick={() => setMenuExpanded(!menuExpanded)}>
          <span className="sr-only">Expand Menu</span>
          <FaBars />
        </button>
        <div className={`${menuExpanded ? "block" : "hidden"} w-screen sm:block sm:w-fit`} id="nav-menu">
          <ul className="font-medium flex flex-col sm:flex-row">
            <li><a href="#" className="block py-2 px-4">About</a></li>
            <li><a href="#" className="block py-2 px-4">Projects</a></li>
            <li><a href="#" className="block py-2 px-4">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
