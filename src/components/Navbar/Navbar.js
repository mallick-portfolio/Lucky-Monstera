import { faHomeAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-slate-700 sm:px-14 sticky top-0">
      <div onClick={()=>setOpen(!open)} className={`sm:hidden pl-5 py-3`}>
        { open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faHomeAlt} />}
      </div>
      <div className="sm:flex justify-between items-center">
        <div className="hidden sm:block">
          <img className="w-16 sm:25 h-auto" src={logo} alt="" />
        </div>
        <nav className={`duration-1000 ${open ? 'block' : 'hidden'}`}>
          <ul className={`sm:flex justify-end items-center`}>
            <li className="navItem">
              <Link to="/" className="inline-block">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/reviews" className="inline-block">Reviews</Link>
            </li>
            <li className="navItem">
              <Link to="/dashboard" className="inline-block">Dashboard</Link>
            </li>
            <li className="navItem">
              <Link to="/" className="inline-block">Blogs</Link>
            </li>
            <li className="navItem">
              <Link to="/" className="inline-block">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
