import React, { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const currentSection = navItems.find(({ href }) => {
        const section = document.getElementById(href.substring(1));

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (currentSection) {
        setActiveSection(currentSection.href.substring(1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        isScrolled
          ? 'translate-y-0 opacity-100 pointer-events-auto bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : '-translate-y-full opacity-0 pointer-events-none py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ==================== BRAND ==================== */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-900 group"
        >
          {/* Logo container */}
          <div
            className="
              relative
              w-12 h-12
              shrink-0
              rounded-xl
              bg-black
              border border-slate-900
              shadow-md
              overflow-hidden
              flex items-center justify-center
              group-hover:border-red-600
              transition-colors
            "
          >
            <img
              src="/logo.png"
              alt="AK Logo"
              className="
                block
                w-full
                h-full
                object-contain
              "
            />
          </div>

          {/* Name */}
          <span className="group-hover:text-red-600 transition-colors">
            {portfolioData.name}
          </span>
        </a>

        {/* ==================== DESKTOP NAV ==================== */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`
                  relative
                  py-1
                  text-sm
                  font-semibold
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? 'text-red-600'
                      : 'text-slate-700 hover:text-red-600'
                  }
                `}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />
                )}
              </a>
            );
          })}

          {/* Resume */}
          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5
              px-4 py-1.5
              text-xs font-bold uppercase tracking-wider
              text-red-600
              border border-red-500
              rounded-lg
              hover:bg-red-600 hover:text-white
              transition-all
              shadow-sm
            "
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </nav>

        {/* ==================== MOBILE BUTTON ==================== */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
            md:hidden
            p-2
            rounded-lg
            text-slate-700
            hover:text-red-600
            hover:bg-slate-100
            transition-colors
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            bg-white
            border-b border-slate-200
            px-4 pt-3 pb-5
            space-y-2
            shadow-lg
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className="
                block
                px-3 py-2
                rounded-md
                text-base font-medium
                text-slate-700
                hover:text-red-600
                hover:bg-slate-50
                transition-colors
              "
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Resume */}
          <div className="pt-2">
            <a
              href={portfolioData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                flex items-center justify-center gap-2
                w-full
                px-4 py-2
                text-sm font-bold
                text-red-600
                border border-red-500
                rounded-lg
                hover:bg-red-600
                hover:text-white
                transition-all
              "
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};