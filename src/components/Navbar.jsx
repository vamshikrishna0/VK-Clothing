import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { MdMenu, MdClose } from "react-icons/md";
import { useCart } from './CartContext';
import { useNavigate } from "react-router-dom";
import { useSearch } from './SearchContext';

function Navbar() {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchQuery } = useSearch();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  

  const handleSearch = (e) => {
  e.preventDefault();
  setSearchQuery(input);    
  navigate("/search");       
   };
  return (
    <div className="top-0 left-0 fixed w-full shadow-xl z-50 bg-white">
      <nav className="flex items-center justify-between p-4 bg-white rounded-xl">
        {/* Logo + Links (Left on lg) */}
        <div className="flex items-center gap-5">
          <img src="./Logo.png" className="h-12 w-12" alt="Logo" />

          {/* Nav links (only shown on large screens) */}
          <ul className="hidden lg:flex gap-5 text-sky-900 text-lg font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Mens">Mens</Link></li>
            <li><Link to="/Women">Women</Link></li>
            <li><Link to="/Sneakers">Sneakers</Link></li>
          </ul>
        </div>

        {/* Right side icons (only shown on lg and above) */}
        <div className="hidden lg:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for Clothing"
              className="pl-10 pr-4 py-2 border border-sky-600 hover:border-2 hover:border-sky-900 rounded-xl w-full focus:outline-none"
            />
            <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-900 text-lg" />
          </form>

          {/* Mobile search input */}
          <form onSubmit={handleSearch} className="relative block lg:hidden">
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for Clothing"
              className="pl-10 pr-4 py-2 border border-sky-600 hover:border-2 hover:border-sky-900 rounded-xl w-full focus:outline-none"
            />
            <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-900 text-lg" />
          </form>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <div className="text-center cursor-pointer">
              <BsCart className="size-6 mx-auto" />
              <p className="text-sm">Cart</p>
            </div>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link to="/signin">
            <button className="px-4 py-2 bg-sky-900 text-white rounded-full hover:bg-white hover:text-sky-800 hover:border-2 border-sky-900 transition">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger button (only on small/medium) */}
        <button
          className="block lg:hidden text-sky-900 text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </nav>

      {/* Dropdown menu for small and medium screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-4 shadow-md">
          <ul className="flex flex-col gap-3 text-sky-900 text-lg font-medium">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/Mens" onClick={() => setIsMenuOpen(false)}>Mens</Link></li>
            <li><Link to="/Women" onClick={() => setIsMenuOpen(false)}>Women</Link></li>
            <li><Link to="/Sneakers" onClick={() => setIsMenuOpen(false)}>Sneakers</Link></li>
          </ul>

           {/* desktop search */}
          <form onSubmit={handleSearch} className="relative hidden lg:block">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for Clothing"
              className="pl-10 pr-4 py-2 border border-sky-600 hover:border-2 hover:border-sky-900 rounded-xl"
            />
            <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-900 text-lg" />
          </form>


          {/* Cart */}
          <Link to="/cart" className="relative flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <BsCart className="text-xl" />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full px-4 py-2 bg-sky-900 text-white rounded-full hover:bg-white hover:text-sky-800 hover:border-2 border-sky-900 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
