import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Wrench, CheckCircle, Trash2, Camera, Users, AlertTriangle, Zap, Droplet, Hammer, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import cleaningImage from "@/assets/cleaning-service.jpg";
import securityImage from "@/assets/security-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
import servicesBg from "@/assets/services-bg.jpg";
const cleaningServices = [
    { title: "Daily Routine Cleaning", items: ["Sweeping & mopping (2–3 cycles/day)", "Microfiber low-dust dusting", "Common area cleaning", "Spill response protocols"] },
    { title: "Restroom Hygiene", items: ["Multi-stage sanitization", "Hard-water stain removal", "Drain cleaning", "Consumable refilling"] },
    { title: "Deep Cleaning", items: ["Kitchen degreasing", "AC vent cleaning", "Drain disinfecting", "Sofa/chair shampooing"] },
    { title: "Specialized Services", items: ["Marble & granite polishing", "Carpet shampooing", "Façade & glass cleaning", "Hospital-grade sanitization"] },
];
const securityServices = [
    { icon: Camera, title: "CCTV Surveillance", description: "24/7 monitoring with suspicious activity escalation" },
    { icon: Users, title: "Access Control", description: "ID verification, staff/vendor tracking, vehicle checking" },
    { icon: AlertTriangle, title: "Emergency Response", description: "Fire evacuation, medical support, incident handling" },
    { icon: Shield, title: "Patrolling", description: "Internal and external patrolling with detailed reporting" },
];
const maintenanceServices = [
    { icon: Zap, title: "Electrical", description: "DB panel inspection, wiring, DG/UPS checks, emergency lighting" },
    { icon: Droplet, title: "Plumbing", description: "Leak repair, blockage clearing, tank monitoring, pump servicing" },
    { icon: Hammer, title: "Civil Works", description: "Crack fixing, tile replacement, waterproofing, carpentry" },
    { icon: Paintbrush, title: "General Upkeep", description: "Painting, signage repair, preventive maintenance scheduling" },
];
const Services = () => {
    return (<Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${servicesBg})` }}/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-card/95 to-background/90"/>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="heading-hero mb-6">
              Comprehensive <span className="text-gradient">Facility Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From professional cleaning to security and maintenance, we provide end-to-end 
              facility management solutions with trained professionals and ISO-aligned processes.
            </p>
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section id="cleaning" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary"/>
                </div>
                <div>
                  <h2 className="text-h2 font-bold">Professional Cleaning Services</h2>
                  <p className="text-sm text-muted-foreground">Regular & Premium Teams Available</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                At Pearl Services, cleanliness is not just an activity—it is a science backed by SOP, 
                training, and advanced machinery. We offer both Regular and Premium cleaning teams 
                to match your facility's requirements.
              </p>
              
              {/* Team Types */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">Regular Team</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Skilled general cleaning staff</li>
                    <li>• Standard chemicals & tools</li>
                    <li>• Daily hygiene maintenance</li>
                    <li>• Budget-friendly option</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Premium Team</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Certified & highly trained personnel</li>
                    <li>• Eco-certified branded chemicals</li>
                    <li>• Advanced machinery</li>
                    <li>• ISO-compliant protocols</li>
                  </ul>
                </div>
              </div>

              <img src={cleaningImage} alt="Professional cleaning team" className="rounded-2xl w-full aspect-video object-cover"/>
            </div>
            
            <div className="space-y-6">
              {cleaningServices.map((service) => (<div key={service.title} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold mb-3">{service.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.items.map((item) => (<li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5"/>
                        {item}
                      </li>))}
                  </ul>
                </div>))}
              
              {/* Waste Management */}
              <div className="p-5 bg-success/5 rounded-xl border border-success/20">
                <div className="flex items-center gap-2 mb-3">
                  <Trash2 className="w-5 h-5 text-success"/>
                  <h3 className="font-semibold">Waste Management</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete segregation (dry, wet, sanitary, e-waste, biomedical), color-coded bin 
                  compliance, scheduled pickups, and coordination with certified recyclers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section id="security" className="section-padding bg-card scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary"/>
                </div>
                <div>
                  <h2 className="text-h2 font-bold">Professional Security Services</h2>
                  <p className="text-sm text-muted-foreground">Regular & Premium Security Forces</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Our security division delivers trained, alert, and accountable personnel who maintain 
                safety through prevention, surveillance, and emergency readiness.
              </p>
              
              {/* Team Types */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-background rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">Regular Guards</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Entry-level trained guards</li>
                    <li>• Basic access control & patrolling</li>
                    <li>• Visitor management</li>
                    <li>• Ideal for residential, small offices</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Premium Team</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fire & safety certified</li>
                    <li>• CCTV-trained operators</li>
                    <li>• Control room specialists</li>
                    <li>• Detailed reporting formats</li>
                  </ul>
                </div>
              </div>

              <img src={securityImage} alt="Professional security guard" className="rounded-2xl w-full aspect-video object-cover"/>
            </div>
            
            <div className="lg:order-1 grid sm:grid-cols-2 gap-4">
              {securityServices.map((service) => (<div key={service.title} className="p-5 bg-background rounded-xl border border-border">
                  <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary"/>
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>))}
              
              {/* Additional Services */}
              <div className="sm:col-span-2 p-5 bg-background rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Additional Security Operations</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {["VIP escorting & cash movements", "Crowd control", "Fire exit monitoring", "Daily occurrence reports",
            "Incident reporting", "Material/gate pass logs"].map((item) => (<div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0"/>
                      {item}
                    </div>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section id="maintenance" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary"/>
                </div>
                <div>
                  <h2 className="text-h2 font-bold">Technical Maintenance Services</h2>
                  <p className="text-sm text-muted-foreground">Regular & AMC-Grade Technicians</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Pearl Services provides multi-domain maintenance support through skilled technicians 
                and certified engineers for all your facility needs.
              </p>
              
              {/* Team Types */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">Regular Team</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• General technicians</li>
                    <li>• Routine checks & repairs</li>
                    <li>• Budget-friendly option</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">AMC-Grade Team</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ISO-compliant preventive maintenance</li>
                    <li>• Lift, HVAC, fire-system coordination</li>
                    <li>• Digital logs & checklists</li>
                  </ul>
                </div>
              </div>

              <img src={maintenanceImage} alt="Professional maintenance technician" className="rounded-2xl w-full aspect-video object-cover"/>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {maintenanceServices.map((service) => (<div key={service.title} className="p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary"/>
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your facility management needs and get a customized 
            solution tailored to your requirements.
          </p>
          <Button asChild className="btn-hero bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2"/>
            </Link>
          </Button>
        </div>
      </section>
    </Layout>);
};
export default Services;
