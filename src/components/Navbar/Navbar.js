import React from "react";
import logo from '../../images/luxurycar.png'
const Navbar = () => {
  return (
    <div className="bg-slate-700 sm:px-6">
      <div className="sm:flex justify-between items-center">
        <div className="logo">
         <img className="w-16 sm:25 h-auto" src={logo} alt="" />
        </div>
        <nav className="mainMenu">
          <ul className="sm:flex justify-end items-center">
            <li className="uppercase sm:ml-5 text-white hover:ring-1 ring-offset-1 px-5 py-1 rounded-lg"><a href="/">Home</a></li>
            <li className="uppercase sm:ml-5 text-white hover:ring-1 ring-offset-1 px-5 py-1 rounded-lg"><a href="/">Reviews</a></li>
            <li className="uppercase sm:ml-5 text-white hover:ring-1 ring-offset-1 px-5 py-1 rounded-lg"><a href="/">Dashboard</a></li>
            <li className="uppercase sm:ml-5 text-white hover:ring-1 ring-offset-1 px-5 py-1 rounded-lg"><a href="/">Blogs</a></li>
            <li className="uppercase sm:ml-5 text-white hover:ring-1 ring-offset-1 px-5 py-1 rounded-lg"><a href="/">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
