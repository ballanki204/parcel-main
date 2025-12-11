import { Building2, Hospital, ShoppingBag, GraduationCap, Hotel, Home, Factory, Briefcase } from "lucide-react";
const industries = [
    { icon: Hospital, name: "Hospitals & Healthcare", description: "Infection control & hygiene" },
    { icon: ShoppingBag, name: "Shopping Malls", description: "High-traffic management" },
    { icon: Briefcase, name: "Corporate Offices", description: "Professional environments" },
    { icon: Hotel, name: "Hotels & Hospitality", description: "Premium service standards" },
    { icon: GraduationCap, name: "Schools & Colleges", description: "Safe learning spaces" },
    { icon: Home, name: "Residential Communities", description: "Clean living spaces" },
    { icon: Factory, name: "Industrial Units", description: "Heavy-duty maintenance" },
    { icon: Building2, name: "IT Parks", description: "Tech-ready facilities" },
];
export const IndustriesSection = () => {
    return (<section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industries
          </span>
          <h2 className="heading-section mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground">
            Trusted by leading organizations across multiple sectors for our professional 
            facility management solutions.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (<div key={industry.name} className="group p-5 md:p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 text-center" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors"/>
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">{industry.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{industry.description}</p>
            </div>))}
        </div>
      </div>
    </section>);
};
