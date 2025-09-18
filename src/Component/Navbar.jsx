import React from "react";
import { Link, Links } from "react-router-dom";
import { Paintbrush } from "lucide-react"; // example icon

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-lg hover:bg-white/90 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-orange-300 flex items-center justify-center shadow-sm">
              <Paintbrush className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">RangVeda</h1>
              <p className="text-xs text-slate-500">
                Hassle-free home painting
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:underline">
              Services
            </a>
            <a href="#portfolio" className="text-sm hover:underline">
              Portfolio
            </a>
            <a href="#testimonials" className="text-sm hover:underline">
              Testimonials
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
            <Link to="/blog" className="text-sm hover:underline">
              Blog
            </Link>
            <a
              href="#quote"
              className="ml-3 inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white shadow-sm text-sm"
            >
              Get Free Quote
            </a>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <a
              href="#quote"
              className="inline-flex items-center px-3 py-2 rounded-full bg-orange-500 text-white text-sm shadow-sm"
            >
              Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
