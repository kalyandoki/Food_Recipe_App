import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GlobalContext } from "../context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <header className="bg-blue-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/hot-spicy-stew-eggplant-zucchini-sweet-pepper-tomato-carrot-onion-olives-capers_2829-1573.jpg?w=1800"
              alt="recipe-logo"
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Food Recipe</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-gray-900 font-medium hover:text-gray-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite"
            className="text-gray-900 font-medium hover:text-gray-600 transition"
          >
            Favorites
          </NavLink>
        </div>

        {/* Search Bar (Visible on Tablets & Desktops) */}
        <form className="hidden md:block" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            className="px-3 py-2 w-64 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </form>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 transition hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden bg-white shadow-md transition-transform duration-300 ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="p-4 space-y-4">
          <NavLink
            to="/"
            className="block py-2 text-gray-900 font-medium hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite"
            className="block py-2 text-gray-900 font-medium hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </NavLink>

          {/* Search Bar (Visible in Mobile Menu) */}
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              className="px-3 py-2 w-full text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
