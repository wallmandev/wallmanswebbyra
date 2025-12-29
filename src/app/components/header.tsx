'use client'
import { useState, useEffect } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState<'transparent' | 'light' | 'dark'>('transparent');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hem', background: 'dark' },
        { id: 'om-oss', background: 'light' },
        { id: 'tjanster', background: 'light' },
        { id: 'portfolio', background: 'dark' },
        { id: 'resurser', background: 'light' },
        { id: 'cta', background: 'light' },
        { id: 'newsletter', background: 'dark' },
        { id: 'kontakt', background: 'dark' },
        { id: 'faq', background: 'dark' },
      ];

      // Om vi är längst upp, använd transparent
      if (window.scrollY < 100) {
        setHeaderStyle('transparent');
        return;
      }

      // Hitta vilken sektion som är närmast toppen av viewporten
      let currentBackground = 'transparent';
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Hämta avståndet från sektion-toppen till viewport-toppen
          const distance = Math.abs(rect.top);
          
          // Om detta är närmaste sektionen ovanför eller vid viewporten
          if (rect.top <= 100 && distance < closestDistance) {
            closestDistance = distance;
            currentBackground = section.background;
          }
        }
      }

      setHeaderStyle(currentBackground as 'transparent' | 'light' | 'dark');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kör en gång vid mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bestäm färger baserat på stil
  const getHeaderClasses = () => {
    switch (headerStyle) {
      case 'transparent':
        return 'bg-transparent border-b border-transparent';
      case 'light':
        // Över ljus bakgrund - mörkare header med ljusa texter
        return 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50';
      case 'dark':
        // Över mörk bakgrund - ljus header med mörka texter
        return 'bg-white/90 backdrop-blur-md border-b border-gray-200/50';
      default:
        return 'bg-transparent border-b border-transparent';
    }
  };

  const getTextClasses = () => {
    switch (headerStyle) {
      case 'transparent':
        return 'text-white hover:text-gray-200';
      case 'light':
        return 'text-gray-200 hover:text-white';
      case 'dark':
        return 'text-gray-900 hover:text-black';
      default:
        return 'text-white hover:text-gray-200';
    }
  };

  const getLogoClasses = () => {
    switch (headerStyle) {
      case 'transparent':
        return 'text-white';
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      default:
        return 'text-white';
    }
  };

  const getMenuClasses = () => {
    switch (headerStyle) {
      case 'transparent':
        return 'bg-gray-900/90 backdrop-blur-md border-gray-700/50';
      case 'light':
        return 'bg-gray-900/90 backdrop-blur-md border-gray-800/50';
      case 'dark':
        return 'bg-white/90 backdrop-blur-md border-gray-200/50';
      default:
        return 'bg-gray-900/90 backdrop-blur-md border-gray-700/50';
    }
  };

  const getMenuTextClasses = () => {
    switch (headerStyle) {
      case 'transparent':
      case 'light':
        return 'text-gray-200 hover:text-white hover:bg-gray-800/50';
      case 'dark':
        return 'text-gray-900 hover:text-black hover:bg-gray-200/50';
      default:
        return 'text-gray-200 hover:text-white hover:bg-gray-800/50';
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <nav className={`w-full rounded-t-none rounded-b-2xl mx-auto max-w-7xl px-6 py-4 flex justify-between items-center ${getHeaderClasses()}`}>
        <div className="flex items-center space-x-2">
          <span className={`text-xl font-bold transition-colors duration-300 ${getLogoClasses()}`}>Christoffer Wallman</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#hem" className={`nav-link font-medium transition-colors duration-200 ${getTextClasses()}`}>Hem</a>
          <a href="#tjanster" className={`nav-link font-medium transition-colors duration-200 ${getTextClasses()}`}>Tjänster</a>
          <a href="#portfolio" className={`nav-link font-medium transition-colors duration-200 ${getTextClasses()}`}>Portfolio</a>
          <a href="#kontakt" className={`nav-link font-medium transition-colors duration-200 ${getTextClasses()}`}>Kontakt</a>
        </div>
        
        {/* Hamburger Button */}
        <button 
          onClick={toggleMobileMenu}
          className={`md:hidden transition-colors duration-200 ${getTextClasses()}`}
        >
          <i className={`fas text-2xl transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'fa-times rotate-180' 
              : 'fa-bars rotate-0'
          }`}></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`} 
      onClick={closeMobileMenu}
      style={{ top: '80px' }}
      />

      {/* Mobile Menu */}
      <div className={`md:hidden relative z-40 transition-all duration-300 ease-out ${
        isMobileMenuOpen 
          ? 'transform translate-y-0 opacity-100' 
          : 'transform -translate-y-2 opacity-0 pointer-events-none'
      }`}>
        <div className={`glass-card mx-4 mt-2 rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${getMenuClasses()}`}>
          <div className="flex flex-col">
            {[
              { href: '#hem', text: 'Hem' },
              { href: '#tjanster', text: 'Tjänster' },
              { href: '#portfolio', text: 'Portfolio' },
              { href: '#kontakt', text: 'Kontakt' }
            ].map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={closeMobileMenu}
                className={`nav-link text-lg py-4 px-6 transition-colors duration-200 border-b border-gray-700/30 last:border-b-0 ${getMenuTextClasses()} ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;