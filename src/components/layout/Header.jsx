import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    return (<header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">Pearl Services</span>
              <span className="text-[10px] text-muted-foreground leading-tight">A Sub Division of TheNexus</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (<Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                ? "text-primary"
                : "text-muted-foreground"}`}>
                {link.name}
              </Link>))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4"/>
              <span>+91 939 284 1433</span>
            </a>
            <Button asChild variant="default" className="btn-primary">
              <Link to="/contact">Book Service</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (<div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (<Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className={`text-base font-medium px-2 py-2 rounded-lg transition-colors ${location.pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                  {link.name}
                </Link>))}
              <Button asChild variant="default" className="btn-primary mt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Service</Link>
              </Button>
            </div>
          </div>)}
      </div>
    </header>);
};
