import { DollarSign, Target, Star } from "lucide-react";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  highlight?: string;
  secondary?: string;
  description: string;
};

const SectionHeader = ({ title, highlight, secondary, description }: SectionHeaderProps) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="mb-5 flex justify-center"></div>
    <h2 className="font-sora text-3xl font-bold leading-tight text-[#151018] sm:text-4xl md:text-5xl">
      <span className="block whitespace-nowrap">
        {title}
        {highlight ? (
          <span className="violet-gradient-text"> {highlight}</span>
        ) : null}
      </span>
      {secondary ? (
        <span className="block text-[#151018] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {secondary}
        </span>
      ) : null}
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#5f5868] sm:text-base">
      {description}
    </p>
  </div>
);

const contactDiscoveryCards = [
  {
    icon: DollarSign,
    title: "Pay Per Use — No Subscription",
    description:
      "SignalHire requires a $49/month subscription. ObserveNow.AI lets you buy credits as needed starting at just $9. No commitment, no wasted budget on unused credits.",
  },
  {
    icon: Target,
    title: "100% Refund for Wrong Numbers",
    description:
      "Get 100% credits back for any wrong phone numbers. SignalHire charges credits even for incorrect data. With ObserveNow.AI, you only pay for numbers and emails that are accurate.",
  },
  {
    icon: Star,
    title: "Higher Phone Accuracy",
    description:
      "ObserveNow.AI delivers 91% verified accuracy for phone numbers compared to SignalHire's reported 75-85%. Combined with the refund guarantee, your effective accuracy is close to 100%.",
  },
];

const Why = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 mt-4"
        >
          <span className="section-badge border border-[#470277]">
            Why ObserveNow.AI
          </span>
        </motion.div>

        <SectionHeader
          title="Why Teams Choose"
          highlight="ObserveNow.AI"
          secondary="over SignalHire"
          description="Empower your sales team with accurate contact data, AI-powered enrichment, seamless CRM integrations, and automation that helps you connect with the right prospects faster."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactDiscoveryCards.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[22px] border border-[#e3d8ec] bg-white px-6 py-8 text-center shadow-[0_10px_28px_rgba(114,51,159,0.08)] hover:shadow-[0_20px_40px_rgba(114,51,159,0.15)] cursor-pointer"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9a72c4] text-white shadow-[0_12px_25px_rgba(114,51,159,0.2)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#18111f]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#625a6c]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
