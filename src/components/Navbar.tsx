import React from 'react';
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
            <div className="text-2xl font-bold ml-2">AutoMart</div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">New Cars</a>
            <a href="#" className="text-gray-700 hover:text-black">Used Cars</a>
            <a href="#" className="text-gray-700 hover:text-black">Sell Car</a>
            <a href="#" className="text-gray-700 hover:text-black">Finance</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;