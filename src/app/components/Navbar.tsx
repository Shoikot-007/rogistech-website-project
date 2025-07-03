'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/faqs', label: 'FAQs' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('header')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="fixed top-8 left-0 right-0 z-50 px-4" aria-label="Site Header">
        <div className="bg-[#0B1A3B] rounded-xl max-w-7xl mx-auto px-3 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg border border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image 
              src="/rogis-logo.png" 
              alt="ROGISGROUP LOGO" 
              width={90} 
              height={90}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 relative group ${
                  isActive(item.href) 
                    ? 'text-[#F9A825] font-semibold' 
                    : 'text-white hover:text-[#F9A825]'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F9A825] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="text-white text-sm sm:text-base md:text-lg font-medium border border-[#00A676] rounded-lg px-6 py-2.5 hover:bg-[#00A676] hover:border-[#00A676] transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25">
                Contact us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#0B1A3B] rounded-xl max-w-7xl mx-auto mt-4 px-6 py-4 shadow-lg border border-white/10">
            <nav className="flex flex-col gap-4 py-2" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#F9A825] bg-[#F9A825]/10 font-semibold'
                      : 'text-white hover:text-[#F9A825] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact Button - Mobile */}
              <Link href="/contact" className="mt-2">
                <button className="w-full text-white text-sm font-medium border border-[#00A676] rounded-lg px-6 py-3 hover:bg-[#00A676] hover:border-[#00A676] transition-all duration-200">
                  Contact us
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      {/* <div className="h-[144px]"></div> */}
    </>
  );
};

export default Navbar;
