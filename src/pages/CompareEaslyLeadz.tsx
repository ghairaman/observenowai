import HeroSection from "@/components/comparison/EaslyLeadz/HeroSection";
import FeatureCards from "@/components/comparison/EaslyLeadz/FeatureCards";
import FeatureComparison from "@/components/comparison/EaslyLeadz/FeatureComparison";
import Why from "@/components/comparison/EaslyLeadz/Why";
import Pricing from "@/components/comparison/EaslyLeadz/Pricing";
import Faqs from "@/components/comparison/EaslyLeadz/Faqs";

const CompareEaslyLeadz = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureCards />
      <FeatureComparison />
      <Why/>
      <Pricing/>
      <Faqs/>
    </div>
  );
};

export default CompareEaslyLeadz;
