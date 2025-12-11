import { Quote } from "lucide-react";
const testimonials = [
    {
        quote: "Pearl Services transformed our facility with their professional cleaning standards. Highly reliable team.",
        author: "Operations Head",
        company: "Leading Hospital, Hyderabad",
    },
    {
        quote: "Security team is disciplined, trained, and proactive. Zero complaints in over a year of service.",
        author: "Mall Manager",
        company: "Shopping Mall, Hyderabad",
    },
    {
        quote: "Their maintenance team responds quickly and their preventive schedules have reduced our downtime significantly.",
        author: "Facility Manager",
        company: "IT Park, Vizag",
    },
];
export const TestimonialsSection = () => {
    return (<section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="heading-section mb-4">
            What Our Clients Say
          </h2>
          <p className="text-background/70">
            Trusted by leading organizations for reliable, professional facility management services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (<div key={index} className="relative p-6 md:p-8 bg-background/5 backdrop-blur-sm rounded-2xl border border-background/10">
              <Quote className="w-8 h-8 text-primary mb-4"/>
              <blockquote className="text-background/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-background/60">{testimonial.company}</div>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
};
