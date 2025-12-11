import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
export const CTASection = () => {
    return (<section className="section-padding bg-gradient-to-br from-primary to-[hsl(340,100%,55%)]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience Professional Facility Management?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Get in touch with our team today and discover how Pearl Services can transform your facility 
            with our cleaning, security, and maintenance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-8">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2"/>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className=" border-2 border-primary-foreground text-black hover:bg-primary-foreground/10 font-semibold px-8">
              <a href="tel:+91XXXXXXXXXX">
                <Phone className="w-5 h-5 mr-2"/>
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>);
};
