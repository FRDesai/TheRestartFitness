"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services & Programs', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Trainer Profile', href: '/trainers' },
    { name: 'Transformations & Testimonials', href: '/transformations' },
    { name: 'Career', href: '/career' },
    { name: 'Franchise', href: '/franchise' },
  ];

  // close on escape & prevent body scroll when menu open
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-transparent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (left) */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              {/* If you have a transparent logo in public/logo use next/image, otherwise replace with text */}
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

          {/* Desktop Nav (right) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>

                  {/* animated underline that grows from left to right */}
                  <span
                    className="absolute left-0 -bottom-2 h-0.5 bg-[var(--color-primary)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ transformOrigin: 'right' }}
                  />
                </li>
              ))}
            </ul>

            {/* CTA on right side */}
            <div className="ml-8">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-md bg-[var(--color-primary)] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Join Now
              </Link>
            </div>
          </nav>

          {/* Mobile: right side hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((s) => !s)}
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

      {/* Mobile slide-over from right */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 flex flex-col` +
            (isMenuOpen ? ' translate-x-0' : ' translate-x-full')}
          aria-label="Mobile menu"
        >
          <div className="px-4 py-5 flex items-center justify-between border-b">
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
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[var(--color-neutral-700)] font-medium text-base px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 py-4 border-t">
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
    </header>
  );
}
