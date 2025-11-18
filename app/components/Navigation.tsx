"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    // { name: 'About Us', href: '/about' },
    { name: 'Services & Programs', href: '/services' },
    { name: 'Locations', href: '/locations' },
    // { name: 'Trainer Profile', href: '/trainers' },
    { name: 'Transformations & Testimonials', href: '/transformations' },
    { name: 'Career', href: '/career' },
    { name: 'Franchise', href: '/franchise' },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    
    function onResize() {
      // Close menu if screen size changes to desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    
    // Only prevent body scroll on mobile when menu is open
    if (isMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-dark)]/80 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo/Transparent_logo.png"
                  alt="Restart Fitness"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <span className="hidden sm:inline-block text-lg font-semibold tracking-tight text-[var(--color-neutral-700)]">
                RestartFitness
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 font-medium pb-1 ${
                      isActive(item.href)
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline animation */}
                  <span className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#E0AE1A] transition-transform duration-300 ease-out origin-left ${
                    isActive(item.href)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="ml-8">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-md bg-[var(--color-primary)] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Join Now
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => {
                // Only toggle menu on mobile screens
                if (window.innerWidth < 768) {
                  setIsMenuOpen((s) => !s);
                }
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 transition-opacity duration-300 pointer-events-auto"
          aria-hidden={false}
        >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-100 transition-opacity duration-300"
        />

        <aside
          className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[var(--color-dark)] shadow-xl transform transition-transform duration-300 flex flex-col translate-x-0"
          aria-label="Mobile menu"
        >
          <div className="px-4 py-5 flex items-center justify-between border-b border-gray-800">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image src="/logo/Transparent_logo.png" alt="Restart Fitness" fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-lg font-semibold text-[var(--color-neutral-700)]">RestartFitness</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-6 flex-1 overflow-auto">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium text-base px-2 py-2 rounded-md transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span className={`absolute left-2 bottom-1 h-0.5 bg-[#E0AE1A] transition-transform duration-300 ease-out origin-left w-[calc(100%-1rem)] ${
                    isActive(item.href)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 py-4 border-t border-gray-800">
            <Link
              href="/contact"
              className="block text-center w-full px-4 py-2 rounded-md bg-[var(--color-primary)] text-white font-semibold shadow"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </aside>
      </div>
      )}
    </header>
  );
}
