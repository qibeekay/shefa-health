import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getImageSrc } from "../utils/imageUtils";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Who I Support", path: "/support" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={getImageSrc("logo.png")}
              alt="Shefa Health & Wellbeing"
              className="h-14 w-14"
            />
            <div className="hidden sm:block">
              <p className="text-xl font-semibold font-cormo">Shefa Health</p>
              <p className="text-xs tracking-wide">& Wellbeing</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-teal-700"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
              Free Discovery Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-2">Free Discovery Call</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
