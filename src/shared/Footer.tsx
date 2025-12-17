import { Facebook, Instagram, Leaf, Mail } from "lucide-react";
import { getImageSrc } from "../utils/imageUtils";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Coaching", path: "/coaching" },
  { name: "Contact", path: "/contactus" },
];

const services = [
  "Menopause Coaching",
  "Holistic Wellbeing",
  "Online Courses",
  "Membership",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={getImageSrc("logo.png")}
                alt="Shefa Health & Wellbeing"
                className="h-14 w-14"
              />
              <div>
                <p className="font-display text-xl font-semibold">
                  Shefa Health
                </p>
                <p className="text-xs text-primary-foreground/70">
                  & Wellbeing
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Empowering women to navigate perimenopause, menopause, and life
              transitions with clarity, confidence, and emotional resilience.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>Shefahealthcoachingsm@gmail.com</p>
              <p>07428697038</p>
              <p>
                <span className="font-bold">Address:</span> 38 london road
                Tilbury Rm18 8du United Kingdom
              </p>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-primary-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Free Discovery Call</span>
              </div>
              <p className="text-xs text-primary-foreground/70">
                Book a complimentary 15-minute call to discuss your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Shefa Health & Wellbeing. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
