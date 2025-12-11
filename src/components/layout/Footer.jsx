import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];
const services = [
    { name: "Professional Cleaning", href: "/services#cleaning" },
    { name: "Security Services", href: "/services#security" },
    { name: "Technical Maintenance", href: "/services#maintenance" },
];
export const Footer = () => {
    return (<footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Pearl Services</span>
                <span className="text-[10px] text-background/60 leading-tight">A Sub Division of TheNexus</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Delivering high-quality cleaning, security, and maintenance services backed by SOP excellence and trained manpower.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (<li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (<li key={service.name}>
                  <Link to={service.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0"/>
                <span>+91 939 284 1433</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary flex-shrink-0"/>
                <span>pearlservices@thenexusrepo.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"/>
                <span>Hyderabad | Vizag</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Pearl Services. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            A Sub division of <span className="text-primary font-medium">TheNexus</span>
          </p>
        </div>
      </div>
    </footer>);
};
