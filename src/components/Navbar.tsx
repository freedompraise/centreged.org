
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || isMobile || isMenuOpen 
      ? 'bg-primary shadow-lg py-2' 
      : 'bg-transparent py-4'
  }`;

  const operationsDropdown = (
    <div className="group relative">
      <button 
        className="flex items-center text-white hover:text-gold transition-colors"
        onClick={() => toggleDropdown('operations')}
      >
        <span className="hover-underline">Operations</span>
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div 
        className={`${
          !isMobile || activeDropdown === 'operations' 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        } ${
          !isMobile 
            ? 'group-hover:opacity-100 group-hover:visible' 
            : ''
        } absolute left-0 mt-2 w-64 transition-all duration-300 bg-white shadow-xl rounded-md overflow-hidden`}
      >
        <Link 
          to="/operations/diplomacy" 
          className="block px-4 py-2 text-primary hover:bg-secondary hover:text-primary-dark transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Diplomacy & International Relations
        </Link>
        <div className="pl-8 pb-2">
          <Link 
            to="/operations/diplomacy#high-level-forums" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            High-Level Forums
          </Link>
          <Link 
            to="/operations/diplomacy#stakeholder-engagement" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Stakeholder Engagement
          </Link>
        </div>
        
        <Link 
          to="/operations/research" 
          className="block px-4 py-2 text-primary hover:bg-secondary hover:text-primary-dark transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Independent Research
        </Link>
        <div className="pl-8 pb-2">
          <Link 
            to="/operations/research#policy-analysis" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Policy Analysis
          </Link>
          <Link 
            to="/operations/research#advisory-services" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Advisory Services
          </Link>
        </div>
        
        <Link 
          to="/operations/capacity-building" 
          className="block px-4 py-2 text-primary hover:bg-secondary hover:text-primary-dark transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Capacity Building
        </Link>
        <div className="pl-8 pb-2">
          <Link 
            to="/operations/capacity-building#training-programs" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Training Programs
          </Link>
          <Link 
            to="/operations/capacity-building#certifications" 
            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Certifications
          </Link>
        </div>
      </div>
    </div>
  );

  const mobileMenu = (
    <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col bg-primary absolute top-full left-0 right-0 shadow-xl`}>
      <Link 
        to="/" 
        className="px-6 py-3 text-white hover:bg-primary-dark transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="px-6 py-3 text-white hover:bg-primary-dark transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </Link>
      <div className="px-6 py-3 text-white">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown('operations')}
        >
          <span>Operations</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'operations' ? 'rotate-180' : ''}`} />
        </div>
        {activeDropdown === 'operations' && (
          <div className="pl-4 mt-2 space-y-2">
            <Link 
              to="/operations/diplomacy" 
              className="block py-2 text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Diplomacy & International Relations
            </Link>
            <Link 
              to="/operations/research" 
              className="block py-2 text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Independent Research
            </Link>
            <Link 
              to="/operations/capacity-building" 
              className="block py-2 text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Capacity Building
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo variant={isScrolled ? 'icon' : 'full'} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold transition-colors">
              <span className="hover-underline">Home</span>
            </Link>
            <Link to="/about" className="text-white hover:text-gold transition-colors">
              <span className="hover-underline">About</span>
            </Link>
            {operationsDropdown}
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMobile && mobileMenu}
      </div>
    </nav>
  );
};

export default Navbar;
