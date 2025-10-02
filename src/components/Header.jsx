import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
                  Zenttech Juice
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Tươi mát từ thiên nhiên</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-mint-600 font-medium transition-colors duration-300">
              Trang chủ
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-mint-600 font-medium transition-colors duration-300">
              Sản phẩm
            </Link>
            <Link to="/combo" className="text-gray-700 hover:text-mint-600 font-medium transition-colors duration-300">
              Combo
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-mint-600 font-medium transition-colors duration-300">
              Về chúng tôi
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-mint-600 font-medium transition-colors duration-300">
              Liên hệ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/order" className="btn-primary">
              Đặt hàng ngay
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-mint-600 focus:outline-none focus:text-mint-600"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-mint-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Trang chủ
              </Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-mint-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Sản phẩm
              </Link>
              <Link to="/combo" className="block px-3 py-2 text-gray-700 hover:text-mint-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Combo
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-mint-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Về chúng tôi
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-mint-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Liên hệ
              </Link>
              <div className="px-3 py-2">
                <Link to="/order" className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Đặt hàng ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
