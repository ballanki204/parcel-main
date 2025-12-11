import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import heroBg from "@/assets/hero-bg.jpg";
const usps = [
    "100% Trained & Verified Workforce",
    "ISO-Aligned Protocols",
    "24/7 Availability",
    "Multi-Industry Experience",
];
export const HeroSection = () => {
    return (<section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"/>
      
      <div className="container-custom py-12 md:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4"/>
              <span>Trusted Facility Management Partner</span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero">
              Professional Cleaning, Security & 
              <span className="text-gradient"> Facility Maintenance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Delivering 360° facility management solutions with trained professionals, 
              ISO-aligned processes, and round-the-clock reliability.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {usps.map((usp) => (<span key={usp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-success"/>
                  {usp}
                </span>))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="btn-hero animate-pulse-glow">
                <Link to="/contact">
                  Book Service
                  <ArrowRight className="w-5 h-5 ml-2"/>
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success"/>
                <span className="text-sm text-muted-foreground">ISO-Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-info"/>
                <span className="text-sm text-muted-foreground">SOP-Driven</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-soft">
              <img src={heroImage} alt="Pearl Services professional cleaning, security and maintenance team" className="w-full h-auto object-cover"/>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"/>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-success/10 rounded-full blur-2xl"/>
          </div>
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="bg-foreground py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (<div key={i} className="flex items-center gap-8 mx-4">
              {[
                "100% Trained & Verified Workforce",
                "ISO-Aligned Cleaning Protocols",
                "CCTV-Trained Security Personnel",
                "AMC-Grade Technical Maintenance",
                "Multi-Industry Experience",
                "Daily Reporting & Transparency",
                "Emergency Response Team Available",
            ].map((item, idx) => (<span key={idx} className="text-background/80 text-black text-sm font-medium flex items-center gap-2 ">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"/>
                  {item}
                </span>))}
            </div>))}
        </div>
      </div>
    </section>);
};
