import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, services } from '../../data';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    if (path === '/services') {
      const hash = window.location.hash;
      if (hash && location.pathname === '/services') {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === link.path 
                    ? 'text-blue-700' 
                    : isScrolled ? 'text-gray-900' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button>
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '65px' }}
      >
        <Container>
          <nav className="flex flex-col py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-blue-700' : 'text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full justify-center mt-4">
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;