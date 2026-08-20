import PhoneIcon from "@/assets/phone-contact.svg";
import MailIcon from "@/assets/mail-contact.svg";
import LocationIcon from "@/assets/location.svg";

import { motion } from "framer-motion";

const cards = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    subtitle: "Available 24/7",
    detail: "+91 9910476546",
    href: "tel:+919910476546",
  },
  {
    icon: MailIcon,
    title: "Write Us",
    subtitle: "Drop us a line anytime",
    detail: "support@observenow.ai",
    href: "mailto:support@observenow.ai",
  },
  {
    icon: LocationIcon,
    title: "Meet Us",
    subtitle: "Come say hello at our HQ",
    detail: "Noida, India",
    href: "#",
  },
];

const ContactCards = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      {/* <div className="font-dm max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6"> */}
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Contact Options
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Multiple Ways to <span className="text-[#72339F]/80 font-sora">Reach Us</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2 mb-12">
          Connect with our team anytime — whether you prefer a quick call, an email, or meeting us in person, we’re always ready to help.
        </p>
        </div>

        <div className="font-dm max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-card font-dm rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
              <img
  src={card.icon}
  alt={card.title}
  className="w-14 h-14 object-contain"
/>


            </div>
            <h3 className="text-lg font-dm font-bold text-foreground mb-1">{card.title}</h3>
            <p className="text-sm font-dm text-muted-foreground mb-3">{card.subtitle}</p>
            <a
              href={card.href}
              className="text-sm font-semibold text-[#470277] hover:underline"
            >
              {card.detail}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
