import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutBg from "@/assets/about-bg.jpg";
const coreValues = [
    { icon: Award, name: "Quality", description: "Excellence in every service we deliver" },
    { icon: Eye, name: "Transparency", description: "Clear communication and honest reporting" },
    { icon: Shield, name: "Discipline", description: "SOP-driven operations at all times" },
    { icon: Heart, name: "Safety", description: "Prioritizing the wellbeing of all" },
    { icon: Users, name: "Customer First", description: "Your satisfaction is our priority" },
];
const About = () => {
    return (<Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutBg})` }}/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"/>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="heading-hero mb-6">
              About <span className="text-gradient">Pearl Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive facility management company offering end-to-end Cleaning, Security, 
              and Technical Maintenance solutions with a strong focus on quality, safety, and trained manpower.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pearl Services is a multi-domain facility management company offering Professional Cleaning Services, 
                  Security Services, and Technical Maintenance Services for residential, commercial, hospitality, 
                  and institutional clients.
                </p>
                <p>
                  With trained manpower, ISO-aligned protocols, and real-world operational expertise, we deliver 
                  consistent quality, safety, and long-term facility care.
                </p>
                <p>
                  Our teams operate using ISO-aligned SOPs, advanced machinery, and real-time reporting systems—making 
                  us a trusted partner for malls, hospitals, theatres, colleges, and residential communities.
                </p>
              </div>
              <Button asChild className="btn-primary mt-8">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              {/* Mission */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary"/>
                  </div>
                  <h3 className="text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To deliver reliable, efficient, and safe facility management services that create hygienic, 
                  secure, and well-maintained environments for people to live, work, and visit.
                </p>
              </div>
              {/* Vision */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary"/>
                  </div>
                  <h3 className="text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be the most trusted Facility Management Solutions provider known for professionalism, 
                  operational excellence, and long-term client partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Pearl Services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (<div key={value.name} className="text-center p-6 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="font-semibold mb-2">{value.name}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <p className="text-background/60 text-sm uppercase tracking-wider mb-4">A Sub Division of</p>
          <h2 className="text-3xl font-bold mb-4"> The Nexus</h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            Pearl Services operates as a specialized facility management division, 
            bringing together expertise in cleaning, security, and maintenance under one trusted brand.
          </p>
        </div>
      </section>
    </Layout>);
};
export default About;
