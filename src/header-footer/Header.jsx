import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import logo3 from "../assets/logo3.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu((prev) => !prev);

  return (
    <header>
      <nav className="text-black px-8 py-2 flex items-center justify-between bg-green-400 shadow-2xl">
        {/* Logo */}
        <div>
          <img src={logo3} alt="Logo" className="w-12 h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <LinkItem to="/" label="Home" />
          <LinkItem to="/calculator" label="Calculator" />
          <LinkItem to="/chart" label="Table" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden ml-auto" onClick={handleClick}>
          <IoMenuSharp className="text-black h-12 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="mobile-nav block md:hidden">
          <div className="flex flex-col text-black text-center">
            <LinkItem
              to="/"
              label="Home"
              onClick={() => setToggleMenu(false)}
            />
            <LinkItem
              to="/calculator"
              label="Calculator"
              onClick={() => setToggleMenu(false)}
            />
            <LinkItem
              to="/chart"
              label="Table"
              onClick={() => setToggleMenu(false)}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

// Reusable Link Component
const LinkItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-600 hover:text-gray-900 font-medium transition duration-200 mt-2 md:mt-0"
  >
    {label}
  </Link>
);

export default Header;
