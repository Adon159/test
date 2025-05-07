import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-blue-400 p-4 text-white">
      <div className="text-left">
        <h1 className="font-bold text-xl uppercase">BRACU Student</h1>
        <h1 className="font-bold text-xl uppercase">Welfare</h1>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:underline">course materials</a>
        <a href="#" className="hover:underline">add notes</a>
        <a href="#" className="hover:underline">marketplace</a>
      </div>
      
      <div className="flex items-center bg-blue-500 px-2 py-1 rounded">
        <ShoppingCart size={20} />
        <span className="ml-1">Cart</span>
      </div>
    </div>
  );
};

export default NavBar;