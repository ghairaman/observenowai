import { motion } from "framer-motion";

const rows = [
  ["Starting Price", "$9 for 250 credits", "$39/mo (Basic Plan)"],
  ["Phone Number Accuracy", "91% Verified", "~ 60–70% reported"],
  ["Credit Refund Policy", "100% credits back for wrong numbers", "Limited Refund Policy"],
  ["Geographic Coverage", "Global (Worldwide)", "Primarily India Focused"],
  ["Chrome Extension", "Yes – Instant Results", "Yes"],
  ["Phone Discovery Speed", "10 seconds", "~ 20–40 seconds"],
  ["Email Finder", "Yes", "Yes"],
  ["GDPR Compliant", "Yes", "Limited Info"],
  ["Bulk Export", "Yes", "Yes (Higher Plans)"],
  ["Pay–Per–Use Option", "Yes – no subscription needed", "No – Subscription required"],
  ["Chrome Web Store Rating", "4.9/5 (1000+ reviews)", "3.8/5"],
  ["Director/C-Level Contacts", "Yes – dedicated Director Phone feature", "Yes"],
  ["MSME Directory", "Yes – 1 M+ Indian businesses", "No"],
];

const FeatureComparison = () => {
  return (
    <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 mt-10"
        >
          <span className="section-badge border border-[#470277]">
            Feature Comparison
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 md:-left:8 lg:-left-8">
            <span className="inline-block whitespace-nowrap text-foreground">Everything You Need to Make the</span>
            <br />
            <span className="inline-block whitespace-nowrap text-[#72339F]/80">Right Choice</span>
          </h1>
        </motion.div>

        <p className="font-sora text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2 mb-12">
          Compare features, capabilities, and pricing to understand how <span className="violet-gradient-text">ObserveNow.ai</span> helps your team find, enrich, and convert leads more efficiently.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
          <div className="grid grid-cols-3 text-left text-sm font-semibold">
            <div className="py-4 bg-slate-50 text-slate-500 pl-6">Features</div>
            <div className="py-4 text-white pl-6" style={{ background: "linear-gradient(90deg, #48B4E1 0%, #72339F 100%)" }}>
              ObserveNow.AI
            </div>
            <div className="pt-6 pb-4 bg-slate-50 text-slate-500 pl-6">EasyLeadz</div>
          </div>

          <div className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
            {rows.map(([feature, ours, theirs], index) => (
              <div
                key={feature}
                className={`grid grid-cols-3 items-center gap-4 px-6 py-5 sm:px-8 ${index % 2 === 0 ? "bg-slate-50/80" : "bg-white"}`}
              >
                <div className="font-semibold text-slate-900 text-left">{feature}</div>
                <div className="text-emerald-600 font-medium text-left">{ours}</div>
                <div className="text-slate-600 text-left pt-2">{theirs}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
