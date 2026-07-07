import HeroSection from "@/components/contact/HeroSection";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import WhyContactUs from "@/components/contact/WhyContactUs";


const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyContactUs />
      <ContactCards />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
