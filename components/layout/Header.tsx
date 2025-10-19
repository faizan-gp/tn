// components/layout/Header.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Added ChevronRight and Instagram icons
import { Menu, X, ChevronRight, Instagram } from 'lucide-react';

// --- NAVIGATION DATA ---
const leftNavLinks = [
  { href: '/menu', label: 'Menus' },
  { href: '/catering', label: 'Catering & Events' },
];
const rightNavLinks = [
  { href: '/delivery', label: 'Delivery' },
  { href: '/takeout', label: 'Takeout' },
];

// New data for the detailed mobile drawer
const mainDrawerLinks = [
  { href: '/location', label: 'Location' },
  { href: '/menu', label: 'Menus' },
  { href: '/catering', label: 'Catering & Events' },
];
const secondaryDrawerLinks = [
    { href: '/gift-cards', label: 'Gift Cards' },
    { href: '/about', label: 'Our Story' },
];
const footerDrawerLinks = [
    { href: '/contact', label: 'Work with us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/accessibility', label: 'Accessibility' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header
        data-scrolled={isScrolled}
        className="group fixed top-0 left-0 w-full z-50 bg-brand-cream
                   transition-all duration-300 ease-in-out
                   data-[scrolled=true]:shadow-md"
      >
        <div
          className="container mx-auto px-4 transition-all duration-300 ease-in-out
                     py-4 md:py-4 md:group-data-[scrolled=true]:py-2"
        >
          {/* --- DESKTOP HEADER (Unchanged) --- */}
          <div className="hidden md:flex justify-between items-center w-full">
            <nav className="flex items-center justify-start w-1/3 gap-8">
              {leftNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-wider text-brand-dark hover:text-brand-red transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="w-1/3 flex justify-center">
              <Link href="/" className="relative z-20 flex flex-col items-center">
                <Image
                  src="/TN-Red.png"
                  alt="Tandoori Nook Logo"
                  className="w-[130px] h-auto transition-all duration-300 ease-in-out group-data-[scrolled=true]:w-[96px]"
                  width={130} height={65} priority
                />
              </Link>
            </div>
            <nav className="flex items-center justify-end w-1/3 gap-4">
              {rightNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="bg-transparent border-2 border-brand-dark text-brand-dark font-bold text-sm uppercase px-6 py-2 rounded-sm hover:bg-brand-dark hover:text-brand-cream transition-all">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* --- MOBILE HEADER (Unchanged) --- */}
          <div className="md:hidden w-full relative">
            <div className="flex justify-between items-center h-[52px]">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/TN-Red.png" alt="Tandoori Nook Logo" width={50} height={50} priority />
                <div>
                  <span className="font-extrabold text-brand-dark uppercase">Tandoori Nook</span>
                  <span className="block text-xs text-brand-dark uppercase tracking-wider">Halal Fast Food</span>
                </div>
              </Link>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-[52px] flex items-center text-brand-dark z-50" aria-label="Toggle menu">
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {rightNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-center bg-transparent border-2 border-brand-dark text-brand-dark font-bold text-sm uppercase py-3 rounded-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- NEW MOBILE MENU PANEL --- */}
      <div
        className={`fixed inset-0 w-full h-full bg-brand-olive text-brand-cream z-[100] transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Top Bar */}
          <div className="flex justify-between items-start pb-6 border-b border-brand-cream/20">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4">
              <Image src="/TN-Red.png" alt="Tandoori Nook Logo" width={45} height={45} className="bg-white rounded-full p-1"/>
              <div>
                <span className="font-extrabold uppercase">Tandoori Nook</span>
                <span className="block text-xs uppercase tracking-wider">Halal Street Food</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border border-brand-cream/50 rounded-md"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Delivery/Takeout Buttons */}
          <div className="grid grid-cols-2 gap-4 py-6">
            {rightNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-center bg-transparent border border-brand-cream text-brand-cream font-bold text-sm uppercase py-3 rounded-md hover:bg-brand-cream hover:text-brand-olive transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Main Navigation */}
          <nav className="flex-grow overflow-y-auto border-t border-brand-cream/20">
            {mainDrawerLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex justify-between items-center py-4 border-b border-brand-cream/20">
                <span className="text-lg font-bold uppercase tracking-wider">{link.label}</span>
                <ChevronRight size={24} />
              </Link>
            ))}
            {secondaryDrawerLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex justify-between items-center py-4 border-b border-brand-cream/20">
                <span className="text-lg font-bold uppercase tracking-wider">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="mt-auto pt-6 text-center">
            <div className="flex justify-center gap-6 text-xs uppercase mb-6">
              {footerDrawerLinks.map(link => (
                <Link key={link.href} href={link.href} className="underline">{link.label}</Link>
              ))}
            </div>
            <a href="https://instagram.com/tandoorinook" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm">
              <Instagram size={20} />
              <span>@tandoorinook</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- LAYOUT SPACER --- */}
      <div
        className={`relative w-full transition-all duration-300 ease-in-out ${
          isScrolled ? 'md:h-[72px]' : 'md:h-[124px]'
        } h-[148px]`}
      />
    </>
  );
}