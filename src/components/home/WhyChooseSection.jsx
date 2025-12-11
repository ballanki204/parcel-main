import { CheckCircle2, Users, FileText, Clock, Award, HeadphonesIcon } from "lucide-react";
const reasons = [
    {
        icon: Users,
        title: "Trained Manpower",
        description: "100% trained and verified workforce across all service domains with real-world operational experience.",
    },
    {
        icon: Award,
        title: "ISO-Aligned SOPs",
        description: "Strict SOP-driven operations with compliance-driven processes ensuring consistent quality.",
    },
    {
        icon: FileText,
        title: "Transparent Reporting",
        description: "Daily occurrence reports, incident reports, and maintenance logs for complete transparency.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer support with quick response emergency teams available.",
    },
    {
        icon: CheckCircle2,
        title: "Multi-Industry Expertise",
        description: "Proven track record in malls, hospitals, theatres, colleges, and residential communities.",
    },
    {
        icon: HeadphonesIcon,
        title: "Dedicated Account Manager",
        description: "Personal point of contact for seamless communication and service coordination.",
    },
];
export const WhyChooseSection = () => {
    return (<section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-section mb-4">
              Why Choose <span className="text-gradient">Pearl Services?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              With multi-domain expertise and a commitment to excellence, we've become 
              the trusted facility management partner for leading organizations across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Trained Staff</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (<div key={reason.title} className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-primary"/>
                </div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
};
