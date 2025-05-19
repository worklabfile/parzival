
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy, User, BarChart3, ShoppingBag, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-esports-black border-b border-esports-red border-opacity-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-esports-red rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Parzival</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile" className="text-gray-300 hover:text-esports-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <User className="w-4 h-4 mr-1" />
              Profile
            </Link>
            <Link to="/achievements" className="text-gray-300 hover:text-esports-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Trophy className="w-4 h-4 mr-1" />
              Achievements
            </Link>
            <Link to="/analytics" className="text-gray-300 hover:text-esports-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <BarChart3 className="w-4 h-4 mr-1" />
              Analytics
            </Link>
            <Link to="/shop" className="text-gray-300 hover:text-esports-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Shop
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-esports-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-esports-darkGray focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-esports-darkGray">
            <Link
              to="/profile"
              className="text-gray-300 hover:text-esports-red block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={toggleMenu}
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
            <Link
              to="/achievements"
              className="text-gray-300 hover:text-esports-red block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={toggleMenu}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Achievements
            </Link>
            <Link
              to="/analytics"
              className="text-gray-300 hover:text-esports-red block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={toggleMenu}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Analytics
            </Link>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-esports-red block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={toggleMenu}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-esports-red block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={toggleMenu}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
