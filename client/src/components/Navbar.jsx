import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Work", href: "#work" },
  { label: "Why Balari", href: "#why-balari" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white font-body hover:text-primary transition-colors duration-200"
  >
    {label}
  </a>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative flex justify-center items-center p-4 md:p-6">
        <div className="bg-secondary flex rounded-full px-6 md:px-8 py-4 justify-between w-full max-w-7xl items-center">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <a href="#">
                <img
                  src={logo}
                  className="h-6 md:h-7 w-auto"
                  alt="Balari Logo"
                />
              </a>
            </div>
          </div>
          <div className="flex max-[864px]:hidden gap-8 items-center justify-center">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="block max-[864px]:hidden">
              <Button
                variant="primary"
                size="sm"
                href="https://calendly.com/beana-balari/consult-call"
                className="text-sm"
              >
                Book Your Consult
              </Button>
            </div>

            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="hidden max-[864px]:inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="hidden max-[864px]:block fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <aside
          className={`fixed top-0 right-0 h-full z-50 w-[80vw] max-w-sm bg-secondary shadow-2xl p-6 hidden max-[864px]:block transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between mb-8">
            <img src={logo} className="h-6 w-auto" alt="Balari Logo" />
            <button
              type="button"
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </div>

          <div className="mt-10">
            <Button
              variant="primary"
              size="md"
              href="https://calendly.com/beana-balari/consult-call"
              className="w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Your Consult
            </Button>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
