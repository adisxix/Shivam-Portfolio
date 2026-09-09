import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      let current = '';
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = `#${section.id}`;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 md:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex flex-col items-center">
      {/* Floating Oval Pill Navbar */}
      <nav
        className={`pointer-events-auto w-full max-w-4xl sm:max-w-5xl rounded-full transition-all duration-300 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled
            ? 'glass-strong border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.8)]'
            : 'glass-card border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-widest text-glow hover:text-neutral-300 transition-colors duration-300"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {personalInfo.initials}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeSection === link.href
                  ? 'text-white active font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex text-xs font-mono font-medium px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-neutral-300 transition-colors p-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Floating Card */}
      {isOpen && (
        <div className="pointer-events-auto w-full max-w-xs sm:max-w-sm mt-2 rounded-2xl glass-strong border border-white/15 p-4 shadow-2xl animate-scale-up md:hidden flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium py-2 px-3.5 rounded-xl transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-white bg-white/15 font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
