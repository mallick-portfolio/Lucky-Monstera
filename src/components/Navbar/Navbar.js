import { faHomeAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../images/luxurycar.png";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-slate-700 sm:px-6 sticky top-0">
      <div onClick={()=>setOpen(!open)} className={`sm:hidden pl-5 pt-5`}>
        { open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faHomeAlt} />}
      </div>
      <div className="sm:flex justify-between items-center">
        <div className="hidden sm:block">
          <img className="w-16 sm:25 h-auto" src={logo} alt="" />
        </div>
        <nav className={`duration-1000 ${open ? 'block' : 'hidden'}`}>
          <ul className={`sm:flex justify-end items-center`}>
            <li className="navItem">
              <a href="/" className="inline-block">Home</a>
            </li>
            <li className="navItem">
              <a href="/" className="inline-block">Reviews</a>
            </li>
            <li className="navItem">
              <a href="/" className="inline-block">Dashboard</a>
            </li>
            <li className="navItem">
              <a href="/" className="inline-block">Blogs</a>
            </li>
            <li className="navItem">
              <a href="/" className="inline-block">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
