import { ArrowRight, Check, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "ObserveNow.AI",
    credits: "3,400 credits per year",
    price: "₹2,083",
    period: "/month",
    billed: "Billed annually",
    features: [
      "91% accuracy guarantee",
      "Global coverage (worldwide)",
      "100% credit refund for wrong numbers",
      "No subscription required",
    ],
    buttonText: "Try ObserveNow.AI",
    buttonHref: "https://dashboard.observenow.ai/signup",
    featured: true,
    badgeText: "BEST VALUE",
    Icon: Crown,
  },
  {
    title: "SignalHire",
    credits: "3,400 credits per year",
    price: "₹3,500",
    period: "/month",
    billed: "Billed annually",
    features: [
      "~60-70% accuracy (user reported)",
      "Primarily India-focused",
      "Limited refund policy",
      "Monthly subscription required",
    ],
    buttonText: "Visit SignalHire",
    buttonHref: "https://signalhire.com",
    featured: false,
    Icon: Sparkles,
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
         <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Pricing
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 md:-left:8 lg:-left-8">
            <span className="inline-block whitespace-nowrap text-[#72339F]/80">
              <span className="violet-gradient-text">ObserveNow.AI</span>
              {'\u00A0'}<span className="text-[#151018]">vs EasyLeadz</span>
            </span> 
          </h1>
        </motion.div>

        <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2 mb-12">
          Better accuracy, more features, and flexible pricing — ObserveNow.AI delivers more value.
        </p>
      </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-[24px] border shadow-sm overflow-hidden transition-all ${
                plan.featured ? "border-[#72339F]/15 bg-[#f9f5ff] shadow-[0_20px_60px_rgba(114,51,159,0.08)]" : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-[#48B4E1] to-[#72339F] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  {plan.badgeText}
                </div>
              )}
              <div className={`p-8 ${plan.featured ? "" : "pt-12"}`}>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#48B4E1] via-[#6C7DE8] to-[#72339F] text-white shadow-[0_15px_35px_rgba(114,51,159,0.18)]">
                  <plan.Icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-[#151018]">{plan.title === "ObserveNow.AI" ? <span className="violet-gradient-text">{plan.title}</span> : plan.title}</h3>
                  <p className="text-sm text-[#6a5b7f]">{plan.credits}</p>
                </div>
              </div>

              <div className="mb-6 text-left">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-[#151018]">{plan.price}</span>
                  <span className="text-base text-[#6a5b7f]">{plan.period}</span>
                </div>
                <p className="mt-1 text-sm text-[#6a5b7f]">{plan.billed}</p>
              </div>

              <div className="mb-7 text-left text-sm text-[#6a5b7f]">
                <p className="font-medium text-[#151018] mb-4">Everything included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`mt-1 h-4 w-4 ${plan.featured ? "text-emerald-500" : "text-red-500"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full rounded-full px-6 py-4 text-base font-semibold transition ${
                  plan.featured
                    ? "btn-gradient text-primary-foreground shadow-violet"
                    : "bg-[#6b7280] text-white hover:bg-[#565d64]"
                }`}
              >
                <a href={plan.buttonHref} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                  {plan.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
