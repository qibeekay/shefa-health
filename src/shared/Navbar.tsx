import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getImageSrc } from "../utils/imageUtils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Coaching", path: "/coaching" },
  { name: "Contact", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Update current path on route change
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener("popstate", handleLocationChange);

    // Custom event listener for navigation (if you're using a custom router)
    window.addEventListener("locationchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("locationchange", handleLocationChange);
    };
  }, []);

  // Handle link clicks
  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    // Update current path immediately
    setCurrentPath(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="xl:container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
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
              <a
                key={link.path}
                href={link.path}
                className={`transition-colors ${
                  currentPath === link.path
                    ? "text-teal-700"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contactus" // Add your actual contact URL
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Free Discovery Call
            </a>
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
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in h-screen">
            <nav className="flex flex-col gap-4">
              {navItems.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    currentPath === link.path
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contactus" // Add your actual contact URL
                className="mt-2 inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Free Discovery Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
