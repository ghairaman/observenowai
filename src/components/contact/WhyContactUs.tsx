import { motion } from "framer-motion";

import VerifiedIcon from "@/assets/sales.svg";
import LinkedinIcon from "@/assets/product.svg";
import TargetIcon from "@/assets/data.svg";
import ClickIcon from "@/assets/general.svg";


const features = [
  {
    icon: VerifiedIcon,
    title: "Sales & Partnerships",
    description:
      "Talk to our team about pricing, demos, and custom solutions tailored to your growth goals. Whether you're a startup or enterprise, we’ll help you find the right fit.",
  },
  {
    icon: LinkedinIcon,
    title: "Product Support",
    description:
      "Need help with integrations, enrichment workflows, or technical issues? Our support team ensures you get accurate data and a smooth experience every time.",
  },
  {
    icon: TargetIcon,
    title: "Data & Accuracy Queries",
    description:
      "Questions about data quality, coverage, or compliance? Reach out to understand how our AI-verified intelligence keeps your pipeline clean and reliable.",
  },
  {
    icon: ClickIcon,
    title: "General Inquiries",
    description:
      "ot sure where to start? Whether it’s feedback, media, or anything else — we’re always open to hearing from you and pointing you in the right direction.",
  },
];

const WhyContactUs = () => {
  return (
    <section className="pt-4 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl text-center">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            We're here
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Why <span className="text-[#72339F]/80 font-sora">Contact Us</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2 mb-12">
          Whether you're exploring data enrichment, scaling outbound, or need help getting the most out of ObserveNow.AI — we're here to help you move faster with better data.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, index) => {
    const shadowMap = [
  "shadow-[-6px_-6px_16px_rgba(71,2,119,0.15)]",  // 1st
  "shadow-[0_8px_16px_rgba(71,2,119,0.15)]",     // 2nd
  "shadow-[0_-8px_16px_rgba(71,2,119,0.15)]",    // 3rd
  "shadow-[6px_-6px_16px_rgba(71,2,119,0.15)]",  // 4th
];


    return (
      <div
        key={feature.title}
        className={`
          font-dm text-center items-center rounded-xl border border-[#470277]/20 bg-card p-4 sm:p-6 min-h-auto sm:min-h-[300px] w-full max-w-[320px] mx-auto sm:max-w-none flex flex-col items-center sm:items-center sm:text-center
          transition-all duration-300
          ${index % 2 === 1 ? "lg:translate-y-10" : "lg:-translate-y-4"}
          ${shadowMap[index]}
          hover:shadow-[0_20px_40px_rgba(71,2,119,0.35)]
        `}
      >
        <div className="font-dm mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
          <img
            src={feature.icon}
            alt={feature.title}
            className="h-10 w-10 object-contain"
          />
        </div>

        <h3 className="font-semibold items-center justify-center text-foreground mb-2 text-base sm:text-lg">
          {feature.title}
        </h3>

        <p className="text-xs sm:text-sm md:text-sm leading-relaxed text-muted-foreground max-w-none sm:max-w-[240px]">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
};

export default WhyContactUs;
