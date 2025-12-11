import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import contactBg from "@/assets/contact-bg.jpg";
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    phone: z.string().regex(/^(?:\+91|0)?[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});
const services = [
    "Professional Cleaning Services",
    "Security Services",
    "Technical Maintenance",
    "Multiple Services (Custom Quote)",
];
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const validatedData = contactSchema.parse(formData);
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            toast.success("Thank you! We'll contact you within 24 hours.");
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(fieldErrors);
                toast.error("Please check the form for errors");
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${contactBg})` }}/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"/>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="heading-hero mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Looking for a professional facility management partner? We'd love to assist you. 
              Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-h2 font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels or fill out the form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+919392841433" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9392841433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@pearlservices.com" className="text-muted-foreground hover:text-primary transition-colors">
                      pearlservices@thenexusrepo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Locations</h3>
                    <p className="text-muted-foreground">Hyderabad | Vizag</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">9 AM – 7 PM (Mon - Sat)</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-success/10 rounded-2xl border border-success/20">
                <h3 className="font-semibold mb-2">Quick Response?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Message us on WhatsApp for faster communication.
                </p>
                <Button asChild className="bg-success hover:bg-success/90 text-success-foreground">
                  <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Pearl%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
                {isSubmitted ? (<div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-success"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      We received your request. Our team will contact you within 24 hours.
                    </p>
                    <Button onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", phone: "", email: "", service: "", message: "" });
            }} variant="outline">
                      Submit Another Request
                    </Button>
                  </div>) : (<>
                    <h3 className="text-xl font-bold mb-6">Request a Callback</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className={errors.name ? "border-destructive" : ""} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}/>
                          {errors.name && (<p id="name-error" role="alert" className="text-sm text-destructive">
                              {errors.name}
                            </p>)}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number <span className="text-destructive">*</span>
                          </Label>
                          <Input id="phone" name="phone" type="tel" inputMode="tel" value={formData.phone} onChange={handleChange} placeholder="10 digit mobile number" className={errors.phone ? "border-destructive" : ""} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}/>
                          {errors.phone && (<p id="phone-error" role="alert" className="text-sm text-destructive">
                              {errors.phone}
                            </p>)}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email (Optional)</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={errors.email ? "border-destructive" : ""}/>
                          {errors.email && (<p role="alert" className="text-sm text-destructive">
                              {errors.email}
                            </p>)}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">
                            Service Required <span className="text-destructive">*</span>
                          </Label>
                          <select id="service" name="service" value={formData.service} onChange={handleChange} className={`input-field ${errors.service ? "border-destructive" : ""}`} aria-invalid={!!errors.service}>
                            <option value="">Select a service</option>
                            {services.map((service) => (<option key={service} value={service}>
                                {service}
                              </option>))}
                          </select>
                          {errors.service && (<p role="alert" className="text-sm text-destructive">
                              {errors.service}
                            </p>)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements, location, and preferred timing..." rows={4} className={errors.message ? "border-destructive" : ""} aria-invalid={!!errors.message}/>
                        {errors.message && (<p role="alert" className="text-sm text-destructive">
                            {errors.message}
                          </p>)}
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="consent" required className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"/>
                        <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
                          I agree to be contacted about this enquiry via phone, email, or WhatsApp.
                        </Label>
                      </div>

                      <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                        {isSubmitting ? ("Sending...") : (<>
                            Submit Request
                            <Send className="w-4 h-4 ml-2"/>
                          </>)}
                      </Button>
                    </form>
                  </>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);
};
export default Contact;
