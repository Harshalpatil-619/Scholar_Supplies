import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="sticky top-0  bg-cyan-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
         
          <span className="text-white text-lg font-bold"><NavLink
            to="/"
            className="text-white hover:text-blue-300 transition"
            activeClassName="font-semibold"
          >
            Scholar Supplies
          </NavLink></span>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/account"
            className="text-white hover:text-blue-300 transition"
            activeClassName="font-semibold"
          >
            Account
          </NavLink>
          <NavLink
            to="/store"
            className="text-white hover:text-blue-300 transition"
            activeClassName="font-semibold"
          >
            Store
          </NavLink>
          <NavLink
            to="/stats"
            className="text-white hover:text-blue-300 transition"
            activeClassName="font-semibold"
          >
            Stats
          </NavLink>
          <NavLink
            to="/transactions"
            className="text-white hover:text-blue-300 transition"
            activeClassName="font-semibold"
          >
            Transactions
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
