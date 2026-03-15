import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-white tracking-tight">
          JK<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="text-gray-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/5 bg-gray-950/95 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm text-gray-300 transition-colors hover:text-cyan-400"
                onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
