
import React from 'react';
import logo from "../assets/logo.svg";
import { Button } from './button';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Work', href: '#work' },
  { label: 'Why Balari', href: '#why-balari' },
  { label: 'Contact', href: '#contact' },
];

const NavLink = ({ label, href }) => (
  <a 
    href={href}
    className='text-white font-body hover:text-primary transition-colors duration-200'
  >
    {label}
  </a>
);

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-transparent'>
      <nav className='flex justify-center items-center p-4 md:p-6 gap-2'>
        <div className='bg-secondary flex rounded-full px-6 md:px-8 py-4 justify-between w-full max-w-7xl items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img 
              src={logo} 
              className="h-6 md:h-7 w-auto" 
              alt="Balari Logo" 
            />
          </div>

          {/* Navigation Links - hidden on mobile, shown on desktop */}
          <div className='hidden md:flex gap-8 items-center'>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* CTA Button */}
          <div className='flex-shrink-0'>
            <Button 
              variant="primary" 
              size="sm"
              href="#consult"
              className='text-sm'
            >
              Book Your Consult
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
