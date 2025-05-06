import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold ml-2">AutoMart</Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/new-cars" className="text-gray-700 hover:text-black">New Cars</Link>
            <Link to="/used-cars" className="text-gray-700 hover:text-black">Used Cars</Link>
            <Link to="/sell-car" className="text-gray-700 hover:text-black">Sell Car</Link>
            <Link to="/finance" className="text-gray-700 hover:text-black">Finance</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;