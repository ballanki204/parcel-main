import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";
import ClientTestimonials from "@/components/home/ClientTestimonials";

const Index = () => {
    return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ClientTestimonials />
      <CTASection />
    </Layout>
    );
};
export default Index;
