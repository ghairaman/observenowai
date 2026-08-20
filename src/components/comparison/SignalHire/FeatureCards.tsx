import { ArrowDownRight, Phone, Star, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: ArrowDownRight,
    title: "6x",
    subtitle: "Cheaper than RocketReach",
  },
  {
    icon: Phone,
    title: "91%",
    subtitle: "Phone Accuracy",
  },
  {
    icon: Star,
    title: "4.9/5",
    subtitle: "Chrome Store Rating",
  },
  {
    icon: ShieldCheck,
    title: "100%",
    subtitle: "Wrong Number Refund",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="font-dm max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-card font-dm rounded-2xl border border-border p-10 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#72339F] flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-dm font-bold text-[#72339F]/90 text-foreground mb-3">{card.title}</h3>
              <p className="text-sm font-dm mb-4">{card.subtitle}</p>
              {/* <p className="text-sm font-medium text-[#470277]">{card.detail}</p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
