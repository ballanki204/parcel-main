import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import cleaningImage from "@/assets/cleaning-service.jpg";
import securityImage from "@/assets/security-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
const services = [
    {
        id: "cleaning",
        icon: Sparkles,
        title: "Professional Cleaning Services",
        description: "Daily cleaning, deep cleaning, floor polishing, waste management, façade cleaning, and hospital-grade sanitization.",
        image: cleaningImage,
        features: ["Regular & Premium Teams", "ISO-Compliant Protocols", "Eco-Friendly Chemicals"],
    },
    {
        id: "security",
        icon: Shield,
        title: "Professional Security Services",
        description: "Trained guards, CCTV monitoring, patrolling, visitor management, emergency drills & incident reporting.",
        image: securityImage,
        features: ["Fire & Safety Certified", "24/7 Monitoring", "Detailed Reporting"],
    },
    {
        id: "maintenance",
        icon: Wrench,
        title: "Technical Maintenance Services",
        description: "Electrical, plumbing, civil repairs, DG/UPS checks, carpentry, painting, preventive maintenance, and AMC support.",
        image: maintenanceImage,
        features: ["Multi-Domain Expertise", "AMC-Grade Technicians", "Preventive Schedules"],
    },
];
export const ServicesSection = () => {
    return (<section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="heading-section mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive facility management solutions tailored to your needs, 
            delivered by trained professionals with real-world expertise.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (<div key={service.id} className="card-service group" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-[4/3]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"/>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-background">
                  <service.icon className="w-5 h-5"/>
                  <span className="text-sm font-medium">Learn More</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-h3 font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature) => (<li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"/>
                    {feature}
                  </li>))}
              </ul>

              {/* CTA */}
              <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                <Link to={`/services#${service.id}`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </Button>
            </div>))}
        </div>
      </div>
    </section>);
};
